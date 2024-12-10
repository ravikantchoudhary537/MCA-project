const jwt = require('jsonwebtoken');

exports.validateToken = (req, res, next) => {
    const token = req.query.token || req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach the decoded user info to the request object
        next(); // Proceed to the next middleware or controller
    } catch (error) {
        return res.status(400).json({ error: 'Invalid token.' });
    }
};
