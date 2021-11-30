const express = require('express');
const router = express.Router();
const category = require('../controllers/categoryController')
const { loginCheck } = require('../middlewares/authentication')

router.get('/', loginCheck, category.getAllCategory)
router.get('/:id', loginCheck, category.getCategoryById)
router.post('/', loginCheck, category.createCategory)

module.exports = router;