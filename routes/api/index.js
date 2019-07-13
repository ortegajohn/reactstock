const router = require("express").Router();
const stockRoutes = require("./stocks");
const getStocks = require("./getstocks");
const signup = require("./signup");

// Book routes
router.use("/stocks", stockRoutes);
router.use("/getstocks", getStocks);
router.use("/signup", signup);

module.exports = router;
