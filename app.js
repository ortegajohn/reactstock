var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var auth = require('./routes/auth');
var sequlize = require('sequlize');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'build')));
app.use('/api/auth', auth);

// catch 404 and forward to error handler
app.use(function(req, res, next){
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, next) {
    //set locals, only providing err in devlopment
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'devlopment' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});



module.exports = app;