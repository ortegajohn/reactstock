const express = require('express');
const expressRouter = express.Router();


const { isNotLoggedIn } = require('../config/helper_auth');

const passport = require('passport');

// expressRouter.get('/signup', isNotLoggedIn, (req, res) => {
//     // res.render('auth/signup')
//     // res.render('<h1><SUCCESS/h1>')
//     console.log("expressRouter.get Object.keys(req): ", Object.keys(req));
//     console.log("expressRouter.get req.body: ",req.body)
//     // res.send('hello world')
//     res.redirect('/signup')
// });


expressRouter.post('/signup', isNotLoggedIn, passport.authenticate('local.signup',
// function(req, res) {
// res.redirect('http://google.com')
// }
{
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash: true
}
));

// expressRouter.get('/signin', isNotLoggedIn, (req, res) => {
//     // res.render('auth/signin');
//     // res.send('hello world')
//     res.redirect('/signin')
// });

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