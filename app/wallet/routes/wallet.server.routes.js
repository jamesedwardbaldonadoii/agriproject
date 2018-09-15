// DECLARE DEPENDENCIES HERE
const wallet = require('../../wallet/controllers/wallet.server.controller');

module.exports = function(app, io) {

	io.on("connection", function (socket) {

		socket.route("wallet.create", wallet.create);
		socket.route("wallet.find", wallet.find.all);
		socket.route("wallet.findOne", wallet.find.one);
		socket.route("wallet.update", wallet.update);
		socket.route("wallet.remove", wallet.remove);
	});
};