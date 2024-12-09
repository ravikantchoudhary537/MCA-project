const pool = require('../models/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
// exports.registerUser = async (req, res) => {
//     const { name, email, number, password } = req.body;

//     if (!name || !email || !number || !password) {
//         return res.status(400).json({ error: 'All fields are required' });
//     }

//     try {
//         // Hash the password
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         // Insert user into database
//         const result = await pool.query(
//             'INSERT INTO "user" (name, email, number, password_hash) VALUES ($1, $2, $3, $4) RETURNING id',
//             [name, email, number, hashedPassword]
//         );

//         res.status(201).json({ message: 'User registered successfully', userId: result.rows[0].id });
//     } catch (error) {
//         console.error(error.message);
//         if (error.code === '23505') {
//             return res.status(400).json({ error: 'Email already exists' });
//         }
//         res.status(500).json({ error: 'Server error' });
//     }
// };
// exports.registerUser = async (req, res) => {
//     const { name, email, number, password } = req.body;

//     if (!name || !email || !number || !password) {
//         return res.status(400).json({ error: 'All fields are required' });
//     }

//     try {
//         // Hash the password
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         // Insert user into the database, handle duplicates
//         const result = await pool.query(
//             `INSERT INTO "user" (name, email, number, password_hash)
//              VALUES ($1, $2, $3, $4)
//              ON CONFLICT (email) DO NOTHING
//              RETURNING id`,
//             [name, email, number, hashedPassword]
//         );

//         if (!result.rows[0]) {
//             return res.status(400).json({ error: 'Email already exists' });
//         }

//         res.status(201).json({ message: 'User registered successfully', userId: result.rows[0].id });
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ error: 'Server error' });
//     }
// };
exports.registerUser = async (req, res) => {
    const { name, email, number, password } = req.body;

    if (!name || !email || !number || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Check if the email already exists
        const existingUser = await pool.query('SELECT id FROM "user" WHERE email = $1', [email]);
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Insert new user
        const result = await pool.query(
            'INSERT INTO "user" (name, email, number, password_hash) VALUES ($1, $2, $3, $4) RETURNING id',
            [name, email, number, hashedPassword]
        );

        res.status(201).json({ message: 'User registered successfully', userId: result.rows[0].id });
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
        // Check if the user exists
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

        // Generate JWT token
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.json({ message: 'Login successful', token });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Server error' });
    }
};