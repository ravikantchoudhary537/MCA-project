const express = require('express');
const { registerUser, loginUser , getUserById, getUserDetails , refreshToken, fillForm } = require('../controllers/userController');
const { validateToken } = require('../middleware/authMiddleware');

const router = express.Router();
// Routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/getuserbyid' , getUserById);
router.get('/getuserdetails' , validateToken , getUserDetails);
router.post('/refresh', refreshToken);
router.post('/fillform',fillForm);
module.exports = router;

