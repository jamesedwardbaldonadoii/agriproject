// DECLARE DEPENDENCIES HERE
const investor = require('../../investor/controllers/investor.server.controller');

module.exports = function(app, io) {

	io.on("connection", function (socket) {

		socket.route("investor.create", investor.create);
		socket.route("investor.find", investor.find.all);
		socket.route("investor.findOne", investor.find.one);
		socket.route("investor.remove", investor.remove);
	});
};