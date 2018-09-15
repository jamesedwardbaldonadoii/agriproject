 const mongoose = require('mongoose'),
 	   Offer = mongoose.model('Offer');

exports.create = (data, callback) => {
	let offer = new Offer(obj);

	Offer.save((req, res) => {
		if (err) {
			return callback(err);
		}

		res
			.select(req.select)
			// .populate(/*field model*/, /*fields*/)
			// .populate({
			// 	path: /*field model*/,
			// 	select: /*fields*/
			// }, callback);
	});
};

exports.find = {
	one: (req, callback) => {
		Offer
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
		Offer
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
	Offer
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
	Offer
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
