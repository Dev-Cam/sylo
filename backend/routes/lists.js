const express = require('express');
const {
	createList,
	getList,
	getLists,
	deleteList,
	updateList,
} = require('../controllers/listController');
const router = express.Router();
const requireAuth = require('../middleware/requireAuth');

//require auth for all list routes
router.use(requireAuth);

//get all lists
router.get('/', getLists);

//get single list
router.get('/:id', getList);

//post(create) new list
router.post('/', createList);

//delete list
router.delete('/:id', deleteList);

//Update list
router.patch('/:id', updateList);

module.exports = router;
