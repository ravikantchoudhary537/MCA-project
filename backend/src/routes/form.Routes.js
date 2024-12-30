const express = require('express');
const { getListOfForms, getpendingforms, getsuccessforms, getfailureforms, fillForm } = require('../controllers/form.Controller.js');
const { validateToken } = require('../middleware/auth.Middleware.js');


const router = express.Router();
// Routes
router.get('/forms', validateToken, getListOfForms);
router.get('/pendingform' , validateToken, getpendingforms);
router.get('/failureform' , validateToken, getfailureforms);
router.get('/successform' , validateToken, getsuccessforms);
router.post('/fillform',validateToken,fillForm);
module.exports = router;