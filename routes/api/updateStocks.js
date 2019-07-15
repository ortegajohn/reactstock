const router = require("express").Router();
const booksController = require("../../controllers/stocksController");

router
.route("/")
.get(booksController.updateStocks);

module.exports = router;