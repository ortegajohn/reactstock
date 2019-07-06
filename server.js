const express = require("express");

const routes = require("./routes");
var db = require("./models");
const app = express();

const morgan = require('morgan');
const path = require('path');
const flash = require('connect-flash');
const express_session = require('express-session')
const mysqlstore = require('express-mysql-session');
const passport = require('passport');
const colors = require('colors');

const PORT = process.env.PORT || 3002;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

var syncOptions = { force: false };
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}
// Start the API server
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;