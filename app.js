const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 8080;
const users = require("./routes/users");
const markers = require("./routes/markers");

//connect to the db
mongoose.connect('mongodb://lostandhounds:lostnhounds1@ds033757.mlab.com:33757/lostandhounds', {useNewUrlParser: true});

//Make sure connected to db
mongoose.connection.on('connected', () => {
  console.log("Connected to db");
});

//Check for connection error to db
mongoose.connection.on('err', () => {
  console.log("Error: " + err);
});

//sets up cors so that you can access files even if on another domain
app.use(cors());

//Converts requests sent from front end to json
app.use(bodyParser.json());

//passport to protect routes
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport); //calls the function from passport.js with passport as param

//anything with [domain]/users will go to the /routes/users folder
app.use('/users', users);

//anything with [domain]/markers will go to the /routes/markers folder
app.use('/markers', markers);

//Set static folder
if(port == 8080) {
  app.use(express.static(path.join(__dirname, 'src'))); //gets current directory and appends with src (development)
}
else {
  app.use(express.static(path.join(__dirname, 'dist/LostAndHounds'))); //production
}

//currently just puts invalid endpoint if trying to go to main default page
app.get('/', (req, res) => {
  res.send("Invalid Endpoint.")
})

/**
	Go to: https://medium.com/@ryanchenkie_40935/angular-cli-deployment-host-your-angular-2-app-on-heroku-3f266f13f352
	Find Handle PathLocationStrategy Routing for more info, Angular2 thing
**/
app.get("*", (req, res) => { //if someone tries to just jump in, it directs them to the index.html which is connected to everything else
  res.sendFile(path.join(__dirname, 'dist/LostAndHounds/index.html'))
});

//listens to requests on port 3000
app.listen(port, () => {
  console.log("Server started on port:" + port);
});
