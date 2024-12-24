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
        const decoded = jwt.verify(token, process.env.JWT_SECRET_ACCESS);
        const { id: userId, name: userName } = decoded; 
        const { form_name, form_value, status } = req.body;

        if (!form_name || !form_value) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const createdAt = new Date();

        const existingEntryQuery = `
            SELECT * FROM user_data WHERE user_id = $1 AND form_id IN 
            (SELECT id FROM form WHERE form_name = $2)
        `;
        const existingEntry = await pool.query(existingEntryQuery, [userId, form_name]);

        if (existingEntry.rows.length > 0) {
            return res.status(400).json({ error: 'You have already submitted this form.' });
        }

        const formInsertQuery = `
            INSERT INTO form (form_name, form_value, user_id, created_at, created_by, status) 
            VALUES ($1, $2, $3, $4, $5, $6) RETURNING id
        `;
        const formInsertResult = await pool.query(formInsertQuery, [
            form_name, form_value, userId, createdAt, userName, status || 'success'
        ]);
        const formId = formInsertResult.rows[0].id;

        const userDataInsertQuery = `
            INSERT INTO user_data (user_id, user_name, form_id, created_at) 
            VALUES ($1, $2, $3, $4)
        `;
        await pool.query(userDataInsertQuery, [userId, userName, formId, createdAt]);

        res.status(201).json({ message: 'Form data submitted successfully' });
    } catch (error) {
        console.error('Error processing fillForm request:', error.message);
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ error: 'Invalid token' });
        }
        res.status(500).json({ error: 'Server error' });
    }
};

