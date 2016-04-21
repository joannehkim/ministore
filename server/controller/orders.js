var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');

module.exports = (function() {
	return{

	show: function(req, res) {
		Order.find({}, function(err, results) {
			if(err) {
				console.log(err);
			} else {
				res.json(results);
			}
		})
		},


	add: function(req, res) {
		console.log(req.body);
		var new_order = new Order({name: req.body.name, product: req.body.product, quantity: req.body.quantity, created_at: req.body.created_at});

		new_order.save(function(err) {
			if(err) {
				console.log(err);
			} else {
				Product.findOne({_id: req.body.product_id}, function(err, product) {
					var new_quantity = product.quantity - req.body.quantity;
					Product.findOneAndUpdate({_id: req.body.product_id}, {quantity: new_quantity}, function(err, results) {
						if(err) {
							console.log(err);
						} else {
							res.json(results);
						}
					})
				});
			}
		})
	}

	}
})();