const express = require('express');
const router = express.Router();
const item = require('../controllers/itemController')
const { loginCheck } = require('../middlewares/authentication')

router.get('/', item.getAllItem)
router.get('/:id', item.getItemById)
router.post('/', loginCheck, item.createItem)
router.put('/:id', loginCheck, item.updateItem)
router.delete('/:id', loginCheck, item.deleteItem)

module.exports = router;
