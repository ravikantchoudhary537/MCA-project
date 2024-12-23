const express = require('express');
const { getListofalluserdata , getUserDatabyuserid } = require('../controllers/userdata.Controller');
const { validateToken } = require('../middleware/auth.Middleware');
const router = express.Router();
// Routes
router.get('/getuserdata' , validateToken, getListofalluserdata);
router.get('/getuserdatabyid' , validateToken , getUserDatabyuserid);

module.exports = router;