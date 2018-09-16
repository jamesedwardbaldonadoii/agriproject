// DECLARE DEPENDENCIES HERE
const offer = require('../../offer/controllers/offer.server.controller');

module.exports = function(app, io) {

	io.on("connection", function (socket) {

		socket.route("offer.create", offer.create);
		socket.route("offer.find", offer.find.all);
		socket.route("offer.findOne", offer.find.one);
		socket.route("offer.remove", offer.remove);
		socket.route("offer.update", offer.update);
	});
};