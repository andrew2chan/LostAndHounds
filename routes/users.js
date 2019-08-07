const express = require("express");
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router(); //sets up express router

const User = require('../models/user') //brings in user

//register
router.post('/register', (req,res,next) => {
  let newUser = new User({ //using the user schema that we exported from models
    firstName: req.body.firstName, //req pulls from the form
    lastName: req.body.lastName,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });

  User.getUserByUsername(newUser.username, (err, user) => { //existing username
    if(err) throw err;
    if(user) {
      return res.json({success: false, msg:"User already exists. Please choose another username."})
    }
    else { //try to add user
      User.addUser(newUser, (err, user) => {
        if(err) { //if any other erros while trying to add user
          res.json({success: false, msg:"Failed to register user. Please try again later."})
        }
        else {
          res.json({success: true, msg:"Registered user."})
        }
      })
    }
  });

});

//authenticate
router.post('/auth', (req,res,next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => { //calls our function to try to find user by username
    if(err) throw err;
    if(!user) { //if can't find user by username
      return res.json({success: false, msg:"User not found with that username."})
    }

    User.comparePassword(password, user.password, (err, isMatch) => { //if found user by that username match passwords
      if(err) throw err;

      if(isMatch) { //if passwords match
        const token = jwt.sign(user.toObject(), 'secretkey', {
          expiresIn: 604800 //user has to login before a week
        });

        res.json({ //if password matches send this response
          success:true,
          token:'JWT '+token,
          user:{
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            email: user.email
          }
        });
      }
      else { //else send this response
        return res.json({success: false, msg:"Wrong password."})
      }

    });
  });
});

//profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req,res,next) => { //protects the profile route with the token
  res.json({user: req.user});
});

//exporting the register
module.exports = router;
