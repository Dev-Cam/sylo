const List = require('../models/listModel');
const mongoose = require('mongoose');

// get all lists
const getLists = async (req, res) => {
	const user_id = req.user._id;
	const lists = await List.find({ user_id }).sort({
		createdAt: -1,
	});

	res.status(200).json(lists);
};

// get single list
const getList = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No such list' });
	}

	const list = await List.findById(id);

	if (!list) {
		return res.status(404).json({ error: 'No such list' });
	}

	res.status(200).json({ list });
};

// create new list
const createList = async (req, res) => {
	const { title } = req.body;

	let emptyFields = [];

	if (!title) {
		emptyFields.push('title');
	}
	if (emptyFields.length > 0) {
		return res
			.status(400)
			.json({ error: 'Please fill in all the fields', emptyFields });
	}
	// add doc to db
	try {
		const user_id = req.user._id;
		const list = await List.create({ title, user_id });
		res.status(200).json(list);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

//delete list
const deleteList = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No such list' });
	}

	const list = await List.findOneAndDelete({ _id: id });

	if (!list) {
		return res.status(404).json({ error: 'No such list' });
	}

	res.status(200).json(list);
};

// update list
const updateList = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No such list' });
	}

	const list = await List.findByIdAndUpdate(
		{ _id: id },
		{
			...req.body,
		}
	);

	if (!list) {
		return res.status(404).json({ error: 'No such list' });
	}
	res.status(200).json(list);
};

module.exports = {
	createList,
	getLists,
	getList,
	deleteList,
	updateList,
};
