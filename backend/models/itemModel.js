const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
	title: {
		type: String,
		required: true,
	},

	list_id: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Item', itemSchema);
