// DECLARE DEPENDENCIES HERE
const transaction = require('../../transaction/controllers/transaction.server.controller');

module.exports = function(app, io) {

	io.on("connection", function (socket) {

		socket.route("transaction.create", transaction.create);
		socket.route("transaction.find", transaction.find.all);
		socket.route("transaction.findOne", transaction.find.one);
		socket.route("transaction.remove", transaction.remove);
	});
};