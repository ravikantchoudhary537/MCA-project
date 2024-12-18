const pool = require('../models/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
exports.getListOfForms = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM form');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching forms:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};
exports.getpendingforms = async (req, res) => {
    try{
    const result = await pool.query("SELECT id, form_name, created_at, created_by, status FROM form where status = 'pending'");
    res.status(200).json(result.rows);
    }catch (error) {
        console.error('Error fetching forms:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
}
exports.getfailureforms = async (req , res) => {
    try{
        const result = await pool.query("SELECT id, form_name, created_at, created_by, status FROM form where status = 'failed'");
        res.status(200).json(result.rows);
    }catch (error){
        console.error('Error fetching forms:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
}
exports.getsuccessforms = async (req , res) => {
    try{
        const result = await pool.query("SELECT id, form_name, created_at, created_by, status FROM form where status = 'success'");
        res.status(200).json(result.rows);
    }catch (error){
        console.error('Error fetching forms:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
}

exports.fillForm = async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Authorization token is required' });
    }
    try {   
        // Decode the token to get user details
        const decoded = jwt.verify(token,  process.env.JWT_SECRET_ACCESS);
        const { id: userId, name: userName } = decoded; // Assuming these are in the token
        const { form_name, form_value, status } = req.body;

        if (!form_name || !form_value) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Insert into the `form` table
        const createdAt = new Date();
        const formInsertResult = await pool.query(
            'INSERT INTO form (form_name, form_value, created_at, created_by, status) VALUES ($1, $2, $3, $4, $5) RETURNING id',
            [form_name, form_value, createdAt, userName, status]
        );

        const formId = formInsertResult.rows[0].id;

        // Insert into the `user_data` table
        await pool.query(
            'INSERT INTO user_data (user_id, user_name, form_id, created_at) VALUES ($1, $2, $3, $4 )',
            [userId, userName, formId, createdAt]
        );

        res.status(201).json({ message: 'Form data submitted successfully' });
    } catch (error) {
        console.error('Error processing fillForm request:', error.message);
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ error: 'Invalid token' });
        }
        res.status(500).json({ error: 'Server error' });
    }
};
