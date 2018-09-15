// DECLARE DEPENDENCIES HERE
const notification = require('../../notification/controllers/notification.server.controller');

module.exports = function(app, io) {

	io.on("connection", function (socket) {

		socket.route("notification.create", notification.create);
		socket.route("notification.find", notification.find.all);
		socket.route("notification.findOne", notification.find.one);
		socket.route("notification.remove", notification.remove);
	});
};