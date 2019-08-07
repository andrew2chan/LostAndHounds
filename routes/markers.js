const express = require("express");
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router(); //sets up express router

const Marker = require('../models/marker') //brings in marker


//add marker
router.post('/addMarker', (req,res,next) => {
  let newMarker = new Marker({
    petName: req.body.petName,
    fullName: req.body.fullName,
    phone: req.body.phone,
    email: req.body.email,
    description: req.body.description,
    lat: req.body.lat,
    lng: req.body.lng
  });

  Marker.addMarker(newMarker, (err, marker) => {
    if(err) throw err;
    if(marker) {
      res.json({success: true, msg: "Marker added to db."});
    }
  });

});

//get all markers
router.get('/getMarkers', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  Marker.getMarkers((err, markers) => {
    return res.json({success: true, markers: markers})
  });
});

//get specific marker based on ID
router.post('/getSpecificMarker', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  let queryID = {
    ID: req.body.ID
  }

  Marker.getSpecificMarker(queryID.ID, (err, markerInfo) => {
    return res.json({success: true, markers: markerInfo})
  });
});

module.exports = router;
