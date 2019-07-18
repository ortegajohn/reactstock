const router = require("express").Router();
const stocksController = require("../../controllers/stocksController");

router
.route("/")
.put(stocksController.updateStocks);

module.exports = router;