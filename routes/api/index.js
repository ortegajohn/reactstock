const router = require("express").Router();
const stockRoutes = require("./stocks");
const getStocks = require("./getstocks");
const signup = require("./signup");
const getuserid = require("./getuserid");
const logout = require("./logout");

// Book routes
router.use("/stocks", stockRoutes);
router.use("/getstocks", getStocks);
router.use("/signup", signup);
router.use("/getuserid", getuserid);
router.use("/logout", logout);

module.exports = router;