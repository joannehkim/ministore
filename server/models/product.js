var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
	name: {type:String, required: true},
	description: {type:String, require: true},
	quantity: {type:Number}
})

Product = mongoose.model('Product', ProductSchema);