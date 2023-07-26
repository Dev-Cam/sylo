const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listSchema = new Schema({
	item: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('List', listSchema);
