var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy
    , User = require('mongoose').model('User');

module.exports = function() {
    passport.use(new LocalStrategy({passReqToCallback: true },function(req, username, password, done) {
        User.findOne({
            username: username
        }, function(err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, {
                    message: 'Unknown user',
                    error:"username"
                });
            }
            if (!user.authenticate(password)) {
                return done(null, false, {
                    message: 'Invalid password',
                    error:"password"
                });
            }
            return done(null, user);
        });
    }));
};
