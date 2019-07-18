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

router
.post("/", isNotLoggedIn, passport.authenticate('local.signup', {
  
  successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true
  
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
