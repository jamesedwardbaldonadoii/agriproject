 const walletmain = require('../controllers/wallet-main.server.controller');

exports.create = (socket, req, callback, next) => {
	let data = req;
	/*Stuff*/
	walletmain.create(data, (err, res) => {
		if (err) {
			return callback(err);
		}
	});
};

exports.find = {
	one: (socket, req, callback, next) => {
		let data = req;
		/*Stuff*/
		walletmain.find.one(data, (err, res) => {
			if (err) {
				return callback(err);
			}
		});
	},
	all: (socket, req, callback, next) => {
		let data = req;
		/*Stuff*/
		walletmain.find.all(data, (err, res) => {
			if (err) {
				return callback(err);
			}
		});
	}
};

exports.update = (socket, req, callback, next) => {
	let data = req;
	/*Stuff*/
	walletmain.update(data, (err, res) => {
		if (err) {
			return callback(err);
		}
	});
};

exports.remove = (socket, req, callback, next) => {
	let data = req;
	/*Stuff*/
	walletmain.remove(data, (err, res) => {
		if (err) {
			return callback(err);
		}
	});
};
