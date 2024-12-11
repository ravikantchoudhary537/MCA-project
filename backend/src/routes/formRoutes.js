const express = require('express');

const { getListOfForms } = require('../controllers/form.js');

const { validateToken } = require('../middleware/authMiddleware');

const router = express.Router();
// Routes
router.get('/forms', validateToken, getListOfForms);
module.exports = router;