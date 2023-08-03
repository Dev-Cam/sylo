const Item = require('../models/itemModel');
const mongoose = require('mongoose');

// get all list items
const getItems = async (req, res) => {
	const list_id = req.list._id;
	const items = await Item.find({ list_id }).sort({
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
	const { id } = req.params;
	const { title } = req.body;

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
		const list_id = id;
		const item = await Item.create({ title, list_id });
		res.status(200).json(item);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

//delete list item
const deleteItem = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No such item' });
	}

	const item = await Item.findOneAndDelete({ _id: id });

	if (!item) {
		return res.status(404).json({ error: 'No such item' });
	}

	res.status(200).json(item);
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
