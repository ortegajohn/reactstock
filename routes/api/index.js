const router = require("express").Router();
const stockRoutes = require("./stocks");
const getStocks = require("./getstocks");
const authentication = require("./authentication");

// Book routes
router.use("/stocks", stockRoutes);
router.use("/getstocks", getStocks);
router.use("/authentication", authentication)

module.exports = router;
