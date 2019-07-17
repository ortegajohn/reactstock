const router = require("express").Router();
const booksController = require("../../controllers/stocksController");
const bcrypt = require('bcryptjs');
const express = require('express');
// const expressRouter = express.Router();
const passport = require('passport');
const { isNotLoggedIn } = require('../../config/helper_auth');

// Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

router.post("/", isNotLoggedIn, passport.authenticate('local.signup',  function(req, res) {
  // const { username, password } = req.body;
  // let errors = [];

  // if(!username || !password){
  //   errors.push({msg: 'Please enter all fields'});
  // }

  // // if (password != password2){
  //   // error.push({msg: 'Passwords do not match'});
  // // }

  // 
  // if(errors.lenght > 0) {
  //   res.render('signup', {
  //     errors,
  //     username,
  //     password,
  //   });
  // } else {
  //   User.findOne({ username: username}).then(user => {
  //     if(user) {
  //       errors.push({ msg: 'User already exists'});
  //       res.render('signup', {
  //         errors,
  //         name,
  //         password
  //     });
  //   } else {
  //     const newUser = new User({
  //       username,
  //       password
  //     });

  //     bcrypt.genSalt(10, (err, salt)=> {
  //       bcrypt.hash(newUser.password, salt, (err, hash) => {
  //         if (err) throw err;
  //         newUser.password = hash;
  //         newUser
  //           .save()
  //           .then(user => {
  //             req.flash(
  //               'success_msg',
  //               'You are now registered and can log in'
  //             );
               res.redirect('/');
  //           })
  //           .catch(err => console.log(err));
  //         });
  //       });
  //     }
  //   });
  // } 
}));

//   {
//     successRedirect: '/',
//     failureRedirect: '/signup',
//     failureFlash: true
// }
// .post(passport.authenticate('local.signup', {
//   successRedirect: "/success",
//   failureRedirect: "/failue"
//   // failureFlash: true
// }))

module.exports = router;
