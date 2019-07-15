const express = require('express');
const expressRouter = express.Router();

const { isNotLoggedIn } = require('../config/helper_auth');

const passport = require('passport');

expressRouter.get('/signup', isNotLoggedIn, (req, res) => {
    // res.render('auth/signup')
    // res.render('<h1><SUCCESS/h1>')
    console.log("expressRouter.get Object.keys(req): ", Object.keys(req));
    console.log("expressRouter.get req.body: ",req.body)
    res.render('/')
});

expressRouter.post('/signup', isNotLoggedIn, passport.authenticate('local.signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true
}));

expressRouter.get('/signin', isNotLoggedIn, (req, res) => {
    console.log("auth signin: ", res);
    res.render('auth/signin');
});

expressRouter.post('/signin', isNotLoggedIn, passport.authenticate('local.signin', {
    successRedirect: '/client/index',
    failureRedirect: '/signin',
    failureFlash: true
}));

expressRouter.post("/signin", passport.authenticate('local', {
    successRedirect: '/index',
    failureRedirect: '/signin',
    failureFlash: true
}), function(req, res, info){
    res.render('login/index',{'message' :req.flash('message')});
});

expressRouter.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/signin');
});

expressRouter.get("api/stockpage", function(req, res) {
    res.render("index");
  });

  expressRouter.get("api/userid1", function(req, res) {

    res.json("index");
  });

module.exports = expressRouter;