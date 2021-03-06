const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
	name: {type: String, required: true, max: 100},
	desc: {type: String, required: true},
	qty: {type: Number, required: true},
	price: {type: Number, required: true},
});

module.exports = mongoose.model('Product', ProductSchema);