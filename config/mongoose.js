const config = require('./config'),
      mongoose = require('mongoose');

module.exports = function() {
    mongoose.Promise = global.Promise;
    const db = mongoose.connect(config.db);

    /*Models*/
    require('../app/user/model/user.server.model.js');
    require('../app/investor/model/investor.server.model.js');
    require('../app/notification/model/notification.server.model.js');
    require('../app/offer/model/offer.server.model.js');
    require('../app/organization/model/organization.server.model.js');
    require('../app/review/model/review.server.model.js');
    require('../app/tag/model/tag.server.model.js');
    require('../app/transaction/model/transaction.server.model.js');
    require('../app/wallet/model/wallet.server.model.js');
    
    return db;
};