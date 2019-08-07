const mongoose = require("mongoose");

//markers schema
const markersSchema = mongoose.Schema({
  petName: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  phone: {
    type: Number
  },
  email: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  lat: {
    type: Number
  },
  lng: {
    type: Number
  }
});

//export markers to use in other places
const Markers = module.exports = mongoose.model("Markers", markersSchema);

module.exports.getUserByUsername = function(username, callback) {
  const query = {username: username}
  Markers.findOne(query, callback); //takes in query to look for 1
}

module.exports.addMarker = function(newMarker, callback) {
  newMarker.save(callback); //if successful then data gets saved to db
}

module.exports.getMarkers = function(callback) {
  Markers.find({}, callback); //get all markers
}

module.exports.getSpecificMarker = function(queryID, callback) {
  const query = { _id: queryID}
  Markers.findOne(query, callback); //get all markers
}
