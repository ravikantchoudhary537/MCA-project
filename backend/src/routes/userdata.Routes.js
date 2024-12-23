const express = require('express');
const { getListofalluserdata , getUserDatabyuserid } = require('../controllers/userdataController');
const { validateToken } = require('../middleware/authMiddleware');
const router = express.Router();
// Routes
router.get('/getuserdata' , validateToken, getListofalluserdata);
router.get('/getuserdatabyid' , validateToken , getUserDatabyuserid);

module.exports = router;