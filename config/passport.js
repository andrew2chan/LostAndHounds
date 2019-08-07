const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');

module.exports = function(passport) {
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt"); //pass tokens from headers
  opts.secretOrKey = 'secretkey' //whatever secret key is
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.getUserById(jwt_payload._id, (err, user) => {
      if(err) {
        return done(err, false); //if err return false
      }

      if(user) { //if user
        return done(null, user); //return the user
      }
      else {
        return done(null, false); //return nothing
      }

    });
  }));
}
