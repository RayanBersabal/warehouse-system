const express = require('express');
const router = express.Router();
const category = require('../controllers/categoryController')

router.get('/', category.getAllCategory)
router.get('/:id', category.getCategoryById)
router.post('/', category.createCategory)

module.exports = router;