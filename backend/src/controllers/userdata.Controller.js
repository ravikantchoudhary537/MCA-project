const pool = require('../models/db.model.js');
const bcrypt = require('bcryptjs'); 
 const jwt = require('jsonwebtoken');
require('dotenv').config();
exports.getListofalluserdata = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM user_data");
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching forms:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getUserDatabyuserid = async (req, res) => {
    const { userId } = req.query; 

    if (!userId) {
        return res.status(400).json({ error: 'User ID is required' });
    }

    try { 
          const query = `
            SELECT * 
            FROM user_data 
            WHERE user_id = $1
        `;

        const result = await pool.query(query, [userId]);

        // Check if data exists
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'No data found for the given user ID' });
        }

        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching user data:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};
