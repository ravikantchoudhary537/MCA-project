const express = require('express');
const { getListOfForms, getpendingforms, getsuccessforms, getfailureforms } = require('../controllers/formController.js');
const { validateToken } = require('../middleware/authMiddleware');

const router = express.Router();
// Routes
router.get('/forms', validateToken, getListOfForms);
router.get('/pendingform' , validateToken, getpendingforms);
router.get('/failureform' , validateToken, getfailureforms);
router.get('/successform' , validateToken, getsuccessforms);
module.exports = router;