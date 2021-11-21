const express = require('express');
const router = express.Router();
const User = require('../controllers/userController')

router.get('/', User.getUser)
router.post('/signin', User.signin)
router.post('/signup', User.signup)

module.exports = router;