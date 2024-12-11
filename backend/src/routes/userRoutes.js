const express = require('express');

<<<<<<< Updated upstream
const { registerUser, loginUser , getUserById, getUserDetails , refreshToken  } = require('../controllers/userController');
=======
const { registerUser, loginUser , getUserById, getUserDetails , refreshToken, fillForm } = require('../controllers/userController');
>>>>>>> Stashed changes

const { validateToken } = require('../middleware/authMiddleware');

const router = express.Router();

// Routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/getuserbyid' , getUserById);
router.get('/getuserbytoken' , validateToken , getUserDetails);
router.post('/refresh', refreshToken);
<<<<<<< Updated upstream
// router.get('/forms', validateToken, getListOfForms);
=======

router.post('/fillform',fillForm);

>>>>>>> Stashed changes
module.exports = router;

