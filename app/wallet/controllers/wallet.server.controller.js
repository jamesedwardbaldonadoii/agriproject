 const walletmain = require('../controllers/wallet-main.server.controller');

exports.create = (socket, req, callback, next) => {
	let data = req;
	/*Stuff*/
	walletmain.create(data, (err, res) => {
		if (err) {
			return callback(err);
		}

		callback (false, res);
	});
};

exports.find = {
	one: (socket, req, callback, next) => {
		let data = req;
		/*Stuff*/
		walletmain.find.one({user: socket.request.user._id}, (err, res) => {
			if (err) {
				return callback(err);
			}
			if (!res) {
				exports.create(socket, { amount: 100000, user:  socket.request.user._id}, callback, next)
			} else {
				callback(res);
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
	walletmain.update(socket.request.user._id, data, (err, res) => {
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
