const express = require('express');
const router = express.Router();
const admin = require('../controllers/adminConstroller')

router.post('/login', admin.login)
router.post('/register', admin.register)

module.exports = router;