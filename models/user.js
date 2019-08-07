const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//User schema
const UserSchema = mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

//exports the user to use in other places
const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback); //findById is a mongoose function that finds by id
}

module.exports.getUserByUsername = function(username, callback) {
  const query = {username: username}
  User.findOne(query, callback); //takes in query to look for 1
}

module.exports.addUser = function(newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => { //generates a salt
    bcrypt.hash(newUser.password, salt, (err, hash) => { //hashes password with the salt from above
      if(err) throw err;
      newUser.password = hash; //save the hashed password
      newUser.save(callback); //if successful then data gets saved to db and cmd will return registered user
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => { //compare takes in unhashed password, password and callback
    if(err) throw err;
    callback(null, isMatch); //ismatch will be either true or false depending
  });
}
