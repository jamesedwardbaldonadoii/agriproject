// DECLARE DEPENDENCIES HERE
const tag = require('../../tag/controllers/tag.server.controller');

module.exports = function(app, io) {

	io.on("connection", function (socket) {

		socket.route("tag.create", tag.create);
		socket.route("tag.find", tag.find.all);
		socket.route("tag.findOne", tag.find.one);
		socket.route("tag.remove", tag.remove);
	});
};