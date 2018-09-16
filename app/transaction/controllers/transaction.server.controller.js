 const transactmain = require('../controllers/transaction-main.server.controller');

exports.create = (socket, req, callback, next) => {
	let data = req;
	/*Stuff*/
	transactmain.create(data, (err, res) => {
		if (err) {
			return callback(err);
		}
	});
};

exports.find = {
	one: (socket, req, callback, next) => {
		let data = req;
		/*Stuff*/
		transactmain.find.one(data, (err, res) => {
			if (err) {
				return callback(err);
			}
		});
	},
	all: (socket, req, callback, next) => {
		let data = req;
		/*Stuff*/
		transactmain.find.all(data, (err, res) => {
			if (err) {
				return callback(err);
			}

			callback(res);
		});
	}
};

exports.update = (socket, req, callback, next) => {
	let data = req;
	/*Stuff*/
	transactmain.update(data, (err, res) => {
		if (err) {
			return callback(err);
		}
	});
};

exports.remove = (socket, req, callback, next) => {
	let data = req;
	/*Stuff*/
	transactmain.remove(data, (err, res) => {
		if (err) {
			return callback(err);
		}
	});
};
