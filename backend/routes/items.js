const express = require('express');
const {
	createItem,
	getItem,
	getItems,
	deleteItem,
	updateItem,
} = require('../controllers/itemsController');
const router = express.Router();
const requireAuth = require('../middleware/requireAuth');

router.use(requireAuth);

//get all  items for selected
router.get('/', getItems);

//get single Items
router.get('/:id', getItem);

//post(create) new Items
router.post('/', createItem);

//Update  item
router.patch('/:id', updateItem);

// Delete  item
router.delete('/:id', deleteItem);

module.exports = router;
