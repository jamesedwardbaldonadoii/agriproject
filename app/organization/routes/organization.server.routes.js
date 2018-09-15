// DECLARE DEPENDENCIES HERE
const organization = require('../../organization/controllers/organization.server.controller');

module.exports = function(app, io) {

	io.on("connection", function (socket) {

		socket.route("organization.create", organization.create);
		socket.route("organization.find", organization.find.all);
		socket.route("organization.findOne", organization.find.one);
		socket.route("organization.remove", organization.remove);
	});
};