const Item = require('../models/itemModel');
const mongoose = require('mongoose');

// get all list items
const getItems = async (req, res) => {
	const { listId } = req.query;

	const items = await Item.find({
		list_id: listId,
		user_id: req.user._id,
	}).sort({
		createdAt: -1,
	});

	res.status(200).json(items);
};

// get single list item
const getItem = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No such item' });
	}

	const item = await Item.findById(id);

	if (!item) {
		return res.status(404).json({ error: 'No such item' });
	}

	res.status(200).json({ item });
};

// create new list item
const createItem = async (req, res) => {
	const { list_id, title } = req.body;

	let emptyFields = [];

	if (!title) {
		emptyFields.push('title');
	}
	if (emptyFields.length > 0) {
		return res
			.status(400)
			.json({ error: 'Please fill in the field', emptyFields });
	}
	// add doc to db
	try {
		const item = await Item.create({ title, list_id, user_id: req.user._id });
		res.status(200).json(item);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

//delete item
const deleteItem = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No such item' });
	}

	const item = await Item.findOneAndDelete({ _id: id, user_id: req.user._id });

	if (!item) {
		return res.status(404).json({ error: 'No such item' });
	}

	res.status(204).send();
};

// update list item
const updateItem = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No such item' });
	}

	const item = await Item.findByIdAndUpdate(
		{ _id: id },
		{
			...req.body,
		}
	);

	if (!item) {
		return res.status(404).json({ error: 'No such item' });
	}
	res.status(200).json(item);
};

module.exports = {
	createItem,
	getItems,
	getItem,
	deleteItem,
	updateItem,
};
