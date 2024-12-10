const express = require('express');
const { registerUser, loginUser , getUserById, getUserDetails } = require('../controllers/userController');
const { validateToken } = require('../middleware/authMiddleware');

const router = express.Router();

// Routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/getuserbyid' , getUserById)
router.get('/getuserbytoken' , validateToken , getUserDetails)

module.exports = router;
