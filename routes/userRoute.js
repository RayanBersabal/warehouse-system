const express = require('express');
const router = express.Router();
const User = require('../controllers/userController')

router.get('/', User.getUser)
router.post('/login', User.login)
router.post('/register', User.register)

module.exports = router;