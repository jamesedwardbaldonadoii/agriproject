 const mongoose = require('mongoose'),
 	   Notification = mongoose.model('Notification');

exports.create = (data, callback) => {
	let notification = new Notification(obj);

	Notification.save((req, res) => {
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
		Notification
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
		Notification
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
	Notification
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
	Notification
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
