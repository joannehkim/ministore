var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = (function() {
	return{
	show: function(req, res) {
		Product.find({}, function(err, results) {
			if(err) {
				console.log(err);
			} else {
				res.json(results);
			}
		})
	  },

	add: function(req, res) {
		console.log(req.body);
		var new_product = new Product({name: req.body.name, quantity: req.body.quantity, description: req.body.description});
		console.log(new_product);
		new_product.save(function(err) {
			if(err) {
				console.log(err);
			} else {
				Product.find({}, function(err, results) {
					if(err) {
						console.log(err);
					} else {
						res.json(results);
					}
				})
			}
		})
	},

	// inventory: function(req, res) {
	// 	Product.update({name: req.body.product, {$inc: {quantity: -req.body.quantity}}, function(err, data) {
	// 		if(err) {
	// 			console.log(err);
	// 		} else {
	// 			res.json(true);
	// 		}
	// 	}

	// })
	// }

	}
})();