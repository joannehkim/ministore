var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function() {
	return{
	show: function(req, res) {
		Customer.find({}, function(err, customers) {
			if(err) {
				console.log(err);
			} else {
				res.json(customers);
			}
		})
	  },

	add: function(req, res, name) {
		customer = new Customer({name: name});
		customer.save(function(err) {
			if(err) {
				console.log(err);
			} else {
				Customer.find({}, function(err, results) {
					if(err) {
						console.log(err);
					} else {
						res.json(results);
					}
				})
			}
		})
	},

	remove: function(req, res, id) {
		Customer.remove({_id: id}, function(err) {
			if(err) {
				console.log(err);
			} else {
				Customer.find({}, function(err, results) {
					if(err) {
						console.log(err);
					} else {
						res.json(results);
					}
				})
			}
		})
	}

	}
})();