const express = require('express');
const { getListOfpayments , getListOfpendingpayments , getListOffailedpayments , getListOfsuccesspayments} = require('../controllers/payment.Controller');
const { validateToken } = require('../middleware/auth.Middleware');
const router = express.Router();
// Routes
router.get('/getpaymentlist' , validateToken, getListOfpayments);
router.get('/getpaymentpendinglist' , validateToken , getListOfpendingpayments);
router.get('/getpaymentfailedlist' , validateToken , getListOffailedpayments);
router.get('/getpaymentsuccesslist' , validateToken , getListOfsuccesspayments);
module.exports = router;