var db = require("../models");
var sequelize = require("sequelize");

module.exports = function(app) {
 

  
  app.get("/", function(req, res) {
    console.log("redirected here!")
    db.Stocks.findAll({


    }).then(function(dbStocks) {
      
      console.log(Object.keys(dbStocks));
      res.render("index", { stocks: dbStocks });
      
    });
  });

  app.get("/stockpage", function(req, res) {
    console.log("CHHHUUUURRRRRRRP")
    db.Stocks.findAll({


    }).then(function(dbStocks) {
      
       res.redirect("/");
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Stocks.findOne({ where: { id: req.params.id } }).then(function(
      dbStocks
    ) {
      res.render("Stocks", {
        example: dbStocks
      });
    });
  });
};

