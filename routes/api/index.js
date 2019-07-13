const router = require("express").Router();
const stockRoutes = require("./stocks");
const getStocks = require("./getstocks");

// Book routes
router.use("/stocks", stockRoutes);
router.use("/getstocks", getStocks);

module.exports = router;
