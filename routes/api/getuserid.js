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
  .get("/", isLoggedIn, (req, res) => {
    console.log("req.user.username",req.user.username)
    console.log("req.user.id",req.user.id)
    var send = {
        username:req.user.username,
        userid: req.user.id
    }
    res.json(send);
    

});
  // .put(booksController.update)
  // .delete(booksController.remove);

module.exports = router;
