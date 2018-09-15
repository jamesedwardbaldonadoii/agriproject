
var mongoose = require('mongoose'),
    System = mongoose.model('System'),
    Group = mongoose.model('Group'),
    UserPreference = mongoose.model('UserPreference'),
    SignUp = mongoose.model('SignUp')
    User = mongoose.model('User');

function UserServerModule(user){
    var _self = this;
    _self.user = user;
    _self.user.username = user.email.toLowerCase();
    _self.user.provider = 'local';
    _self.email = user.email.toLowerCase();
};

UserServerModule.prototype.register = function(callback, company){
    var user = new User(this.user);
    var system, data, group, query;
    if(company){
        //IF NEW COMPANY
        system = new System({
            creator: user,
            created: new Date(),
            companyName: company,
        });
        group = new Group({
            created: new Date(),
            name: 'Admnistrator',
            company: system._id,
            description: 'Admin',
            type: 'admin',
            members: [{
                members: user
            }]
        });
        query = {email: this.email};
        data = { company: system._id,  verified: true };
        user.company = system._id;
    }
    else {
        //IF USER INVITED
        system = user.company;
        query = {company: system, "invites.email": this.email};
        data = {"verified.$": true};
    }
    var userPreference = new UserPreference({
        user: user,
        company: system,
    });
    user.save(function(err, res){
        if(!err){
            if(company){
                group.save();
                system.save();
            }
            userPreference.save();
            SignUp.findOneAndUpdate(query,{$set: data});
            if(callback){
                callback(res);
            }
        }
    });
};

module.exports = UserServerModule;