const jwt = require('jsonwebtoken');
require('dotenv').config();
exports.validateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'Authorization header is missing' });
    }

    const token = authHeader.split(' ')[1]; // Bearer <token>
    if (!token) {
        return res.status(401).json({ error: 'Token is missing' });
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET_ACCESS);
        req.user = payload; // Attach user payload to request
        next();
    } catch (error) {
        console.error('Token validation error:', error.message);
        res.status(401).json({ error: 'Invalid or expired token' });
    }
};
