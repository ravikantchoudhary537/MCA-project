const pool = require('../models/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
exports.getListOfForms = async (req, res) => {
    try {
        const result = await pool.query('SELECT  id, form_name, created_at, created_by, status FROM form');
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