var customers = require('./../controller/customers.js');
var orders = require('./../controller/orders.js');
var products = require('./../controller/products.js');

module.exports = function(app) {
	app.get('/customers', function(req, res) {
		customers.show(req, res);
	});

	app.post('/new/:name/', function(req, res) {
		customers.add(req, res, req.params.name);
	});

	app.post('/remove/:id/', function(req, res) {
		customers.remove(req, res, req.params.id);
	});

	app.get('/orders', function(req, res) {
		orders.show(req, res);
	});

	app.post('/addOrder', function(req, res) {
		orders.add(req, res);
	});

	app.get('/products', function(req, res) {
		products.show(req, res);
	})

	app.post('/addProduct', function(req, res) {
		products.add(req, res);
	})

}