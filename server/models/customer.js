var mongoose = require('mongoose');
var customerSchema = new mongoose.Schema({
	name: {type:String, required: true},
	created_at: {type: Date, default: Date.now}
})

var Customer = mongoose.model('Customer', customerSchema);