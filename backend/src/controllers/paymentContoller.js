const pool = require('../models/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
exports.getListOfpayments = async (req, res) => {
    try {
        const result = await pool.query("SELECT  id, payment_value , created_at, created_by, status FROM payment");
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching forms:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};
