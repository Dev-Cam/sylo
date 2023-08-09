const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	list_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'List',
	},
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
});

module.exports = mongoose.model('Item', itemSchema);
