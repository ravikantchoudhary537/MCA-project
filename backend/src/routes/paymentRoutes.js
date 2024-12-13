const express = require('express');
const { getListOfpayments } = require('../controllers/paymentContoller');
const { validateToken } = require('../middleware/authMiddleware');
const router = express.Router();
// Routes
router.get('/getpaymentlist' , validateToken, getListOfpayments);
module.exports = router;