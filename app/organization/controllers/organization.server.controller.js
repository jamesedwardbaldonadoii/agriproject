 const orgmain = require('../controllers/organization-main.server.controller');

exports.create = (socket, req, callback, next) => {
	let data = req;
	/*Stuff*/
	orgmain.create(data, (err, res) => {
		if (err) {
			return callback(err);
		}
	});
};

exports.find = {
	one: (socket, req, callback, next) => {
		let data = req;
		/*Stuff*/
		orgmain.find.one(data, (err, res) => {
			if (err) {
				return callback(err);
			}
		});
	},
	all: (socket, req, callback, next) => {
		let data = req;
		/*Stuff*/
		orgmain.find.all(data, (err, res) => {
			if (err) {
				return callback(err);
			}
		});
	}
};

exports.update = (socket, req, callback, next) => {
	let data = req;
	/*Stuff*/
	orgmain.update(data, (err, res) => {
		if (err) {
			return callback(err);
		}
	});
};

exports.remove = (socket, req, callback, next) => {
	let data = req;
	/*Stuff*/
	orgmain.remove(data, (err, res) => {
		if (err) {
			return callback(err);
		}
	});
};
