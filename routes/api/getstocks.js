const router = require("express").Router();
const booksController = require("../../controllers/stocksController");

router
.route("/")
.get(booksController.getstocks);

module.exports = router;