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
    const { id, form_name, form_value,created_at,created_by, status} = req.body;

    if (!id || !form_name || !form_value || !created_by || !created_at || !status) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const existingEntry = await pool.query('SELECT * FROM "form" WHERE id = $1', [id]);

        if (existingEntry.rows.length > 0) {
            return res.status(400).json({ error: 'Data already exists for this user ID' });
        }
        // Insert data into the database
        await pool.query(
            'INSERT INTO form (id, form_name, form_value,created_at,created_by, status) VALUES ($1, $2, $3, $4, $5 , $6)',
            [id, form_name, form_value,created_at,created_by, status]
        );

        res.status(201).json({ message: 'Form data submitted successfully' });
    } catch (error) {
        console.error('Error inserting form data:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};
