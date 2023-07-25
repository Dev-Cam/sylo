const ShoppingList = require('../models/shoppingListModel');
const mongoose = require('mongoose');

// get all shopping lists
const getShoppingLists = async (req, res) => {
	const shoppingLists = await ShoppingList.find({}).sort({ createdAt: -1 });

	res.status(200).json(shoppingLists);
};

// get single shopping list
const getShoppingList = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No such shopping list' });
	}

	const shoppingList = await ShoppingList.findById(id);

	if (!shoppingList) {
		return res.status(404).json({ error: 'No such shopping list' });
	}

	res.status(200).json({ shoppingList });
};

// create new shopping list
const createShoppingList = async (req, res) => {
	const { title, creator } = req.body;

	let emptyFields = [];

	if (!title) {
		emptyFields.push('title');
	}

	if (!creator) {
		emptyFields.push('creator');
	}
	if (emptyFields.length > 0) {
		return res
			.status(400)
			.json({ error: 'Please fill in all the fields', emptyFields });
	}
	// add doc to db
	try {
		const shoppingList = await ShoppingList.create({ title, creator });
		res.status(200).json(shoppingList);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

//delete shopping list
const deleteShoppingList = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No such shopping list' });
	}

	const shoppingList = await ShoppingList.findOneAndDelete({ _id: id });

	if (!shoppingList) {
		return res.status(404).json({ error: 'No such shopping list' });
	}

	res.status(200).json(shoppingList);
};

// update shopping list
const updateShoppingList = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No such shopping list' });
	}

	const shoppingList = await ShoppingList.findByIdAndUpdate(
		{ _id: id },
		{
			...req.body,
		}
	);

	if (!shoppingList) {
		return res.status(404).json({ error: 'No such shopping list' });
	}
	res.status(200).json(shoppingList);
};

module.exports = {
	createShoppingList,
	getShoppingLists,
	getShoppingList,
	deleteShoppingList,
	updateShoppingList,
};
