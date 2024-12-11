const express = require('express');

const { registerUser, loginUser , getUserById, getUserDetails , refreshToken  } = require('../controllers/userController');

const { validateToken } = require('../middleware/authMiddleware');

const router = express.Router();

// Routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/getuserbyid' , getUserById);
router.get('/getuserbytoken' , validateToken , getUserDetails);
router.post('/refresh', refreshToken);
// router.get('/forms', validateToken, getListOfForms);
module.exports = router;

