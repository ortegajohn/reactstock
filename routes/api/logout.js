const router = require("express").Router();
const booksController = require("../../controllers/stocksController");
const { isLoggedIn } = require('../../config/helper_auth');
const express = require('express');
const expressRouter = express.Router();

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
  // .route("/")
  // .post(booksController.savebook);
  .get("/", (req, res) => {
    req.logOut();
    res.redirect('/signin');
});
  // .put(booksController.update)
  // .delete(booksController.remove);

module.exports = router;
