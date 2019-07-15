const router = require("express").Router();
const stockRoutes = require("./stocks");
const getStocks = require("./getstocks");
const signup = require("./signup");
const signin = require("./signin");

// Book routes
router.use("/stocks", stockRoutes);
router.use("/getstocks", getStocks);
router.use("/signup", signup);
router.use("/signin", signin)

module.exports = router;
