 const investmain = require('../controllers/investor-main.server.controller');

exports.create = (socket, req, callback, next) => {
	let data = req;
	/*Stuff*/
	investmain.create(data, (err, res) => {
		if (err) {
			return callback(err);
		}
	});
};

exports.find = {
	one: (socket, req, callback, next) => {
		let data = req;
		/*Stuff*/
		investmain.find.one(data, (err, res) => {
			if (err) {
				return callback(err);
			}
		});
	},
	all: (socket, req, callback, next) => {
		let data = req;
		/*Stuff*/
		investmain.find.all(data, (err, res) => {
			if (err) {
				return callback(err);
			}
		});
	}
};

exports.update = (socket, req, callback, next) => {
	let data = req;
	/*Stuff*/
	investmain.update(data, (err, res) => {
		if (err) {
			return callback(err);
		}
	});
};

exports.remove = (socket, req, callback, next) => {
	let data = req;
	/*Stuff*/
	investmain.remove(data, (err, res) => {
		if (err) {
			return callback(err);
		}
	});
};
