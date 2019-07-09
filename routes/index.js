const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const { isLoggedIn } = require('../config/helper_auth');

// API Routes
router.use("/api", apiRoutes);
router.get('/api/getuserid', isLoggedIn, (req, res) => {
  console.log("req.user.username",req.user.username)
  console.log("req.user.id",req.user.id)
  var send = {
      username:req.user.username,
      userid: req.user.id
  }
  res.json(send);
});

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
