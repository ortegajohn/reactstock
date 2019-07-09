const express = require('express');
const expressRouter = express.Router();
const ReactDOM = require('react-dom');
const { isNotLoggedIn } = require('../config/helper_auth');

const passport = require('passport');

expressRouter.get('/signup', isNotLoggedIn, (req, res) => {
    res.render('auth/signup')
});

expressRouter.post('/signup', isNotLoggedIn, passport.authenticate('local.signup', {
    successRedirect: ReactDOM.render("A", document.getElementById("root")),
    failureRedirect: '/signup',
    failureFlash: true
}));

expressRouter.get('/signin', isNotLoggedIn, (req, res) => {
    ReactDOM.render("A", document.getElementById("root"));
    //res.render('auth/signin');
});

expressRouter.post('/signin', isNotLoggedIn, passport.authenticate('local.signin', {
    successRedirect: '/',
    failureRedirect: '/signin',
    failureFlash: true
}));

expressRouter.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/signin');
});

module.exports = expressRouter;