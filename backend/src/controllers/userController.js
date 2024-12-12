const pool = require('../models/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateTokens = (userId) => {
    const accessToken = jwt.sign({ id: userId }, process.env.JWT_SECRET_ACCESS, {
        expiresIn: process.env.JWT_EXPIRATION_ACCESS,
    });
    const refreshToken = jwt.sign({ id: userId }, process.env.JWT_SECRET_REFRESH, {
        expiresIn: process.env.JWT_EXPIRATION_REFRESH,
    });
    return { accessToken, refreshToken };
};
exports.registerUser = async (req, res) => { 
    const { name, email, number, password } = req.body;

    if (!name || !email || !number || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Check if email exists
        const existingUser = await pool.query('SELECT id FROM "user" WHERE email = $1', [email]);
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Insert new user
        const result = await pool.query(
            'INSERT INTO "user" (name, email, number, password_hash) VALUES ($1, $2, $3, $4) RETURNING id',
            [name, email, number, hashedPassword]
        );

        const userId = result.rows[0].id;

        // Generate tokens

        res.status(201).json({
            message: 'User registered successfully',
            userId

        });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Check if user exists
        const result = await pool.query('SELECT * FROM "user" WHERE email = $1', [email]);
        const user = result.rows[0];
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Generate tokens
        const { accessToken, refreshToken } = generateTokens(user.id);

        res.json({
            message: 'Login successful',
            accessToken,
            refreshToken,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Server error' });
    }
};
exports.refreshToken = async (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ error: 'Refresh token is required' });
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET_REFRESH);
        const { accessToken, refreshToken } = generateTokens(payload.id);

        res.json({ accessToken, refreshToken });
    } catch (error) {
        console.error('Error refreshing token:', error.message);
        res.status(401).json({ error: 'Invalid or expired refresh token' });
    }
};
exports.getUserById = async (req, res) => {
    const { userid } = req.query;  // Retrieve the `userid` from query params

    if (!userid) {
        return res.status(400).json({ error: 'User ID is required' });
    }

    try {
        // Query the database to fetch user details
        const result = await pool.query('SELECT name, email, number FROM "user" WHERE id = $1', [userid]);
        const user = result.rows[0];

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Return hardcoded id: "<id>"
        res.json({
            id: "<id>",  // Hardcoded placeholder for id
            name: user.name,
            email: user.email,
            number: user.number
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Server error' });
    }
};
exports.getUserDetails = async (req, res) => {
    try {
        // Get user ID from the token payload
        const userId = req.user.id;

        // Fetch user details from the database
        const result = await pool.query('SELECT id, name, email, number FROM "user" WHERE id = $1', [userId]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Send user details in the response
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching user details:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};
exports.fillForm = async (req, res) => {
    const { id, name, value, created_by, status } = req.body;

    if (!id || !name || !value || !created_by || !status) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const existingEntry = await pool.query('SELECT * FROM "form_data" WHERE id = $1', [id]);

        if (existingEntry.rows.length > 0) {
            return res.status(400).json({ error: 'Data already exists for this user ID' });
        }
        // Insert data into the database
        await pool.query(
            'INSERT INTO form_data (id, name, value, created_by, status) VALUES ($1, $2, $3, $4, $5)',
            [id, name, value, created_by, status]
        );

        res.status(201).json({ message: 'Form data submitted successfully' });
    } catch (error) {
        console.error('Error inserting form data:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};
