const express = require("express");

const routes = require("./routes");
var db = require("./models");
const app = express();
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
app.use(require('./routes'));
app.use(require('./routes/authentication'));
const morgan = require('morgan');
const path = require('path');
const flash = require('connect-flash');
const express_session = require('express-session')
const mysqlstore = require('express-mysql-session');
const passport = require('passport');
const colors = require('colors');

const PORT = process.env.PORT || 3002;

var db = require("./models");
require('./config/passport');
const {
  keys
} = require('./db/database_keys');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express_session({
  secret: 'random_secrete_string',
  resave: false,
  saveUninitialized: false,
  store: new mysqlstore(keys)

}));
app.use(flash());

app.use(morgan('dev'));
app.use(passport.initialize());

app.use(passport.session());
/* Global Variables */
app.use((req, res, next) => {

  app.locals.success = req.flash('success');
  app.locals.message = req.flash('message');
  app.locals.user = req.user;
  next();

});
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
app.use(require('./routes/authentication'));
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