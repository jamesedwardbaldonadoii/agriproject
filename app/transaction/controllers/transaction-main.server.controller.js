 const mongoose = require('mongoose'),
 	   Transaction = mongoose.model('Transaction');

exports.create = (data, callback) => {
	let transaction = new Transaction(data);

	transaction.save((req, res) => {
		if (err) {
			return callback(err);
		}

		callback(res);
			// .populate(/*field model*/, /*fields*/)
			// .populate({
			// 	path: /*field model*/,
			// 	select: /*fields*/
			// }, callback);
	});
};

exports.find = {
	one: (req, callback) => {
		Transaction
			.findOne(req.query)
			.select(req.select)
			.exec((err, res) => {
				if(err)
					callback(err);
				else
					callback(false, res);
			});
	},
	all: (req, callback) => {
		Transaction
			.find(req.query)
			.sort(req.sort)
			.limit(req.limit)
			.skip(req.skip)
			.select(req.select)
			.exec(function(err, res){
				if(err)
					callback(err);
				else
					callback(false, res);
			});
	}
};

exports.update = (req, callback) => {
	Transaction
		.findOneAndUpdate(req.query, req.data, { new: true })
		.select(req.select)
		// .populate(/*field model*/, /*fields*/)
		.exec((err, res) => {
			if(err)
				callback(err);
			else
				callback(false, res);			
		});
};

exports.remove = (req, callback) => {
	Transaction
		.findOneAndUpdate(req, {
			deleted_date: new Date()
		}, { new: true })
		.select(req.select)
		// .populate(/*field model*/, /*fields*/)
		.exec((err, res) => {
			if(err)
				callback(err);
			else
				callback(false);		
		});
};
