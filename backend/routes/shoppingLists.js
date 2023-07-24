const express = require('express');
const {
	createShoppingList,
	getShoppingList,
	getShoppingLists,
	deleteShoppingList,
	updateShoppingList,
} = require('../controllers/shoppingListController');
const router = express.Router();

//get all shopping lists
router.get('/', getShoppingLists);

//get single list
router.get('/:id', getShoppingList);

//post(create) new list
router.post('/', createShoppingList);

//delete list
router.delete('/:id', deleteShoppingList);

//Update list
router.patch('/:id', updateShoppingList);

module.exports = router;
