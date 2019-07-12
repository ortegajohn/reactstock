var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

// load up the user model
var User = require('../models/user');
var settings = require('../config/settings'); //gets seetings file

module.exports = (passport) => {
    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secertOrKey = settings.secret;
    passport.use(new JwtStrategy(opts, function(jwt_payload, done){
        User.findOne({id: jwt_payload.id}, (err, user)=>{
            if(err){
                return done(err, false);
            }
            if (user){
                done(null, user);
            }else {
                done(null, false);
            }
        });
    }));
};