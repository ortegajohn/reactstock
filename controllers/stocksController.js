const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  savebook: function(req, res) {
    // console.log("Object.keys(req): ", Object.keys(req));
    console.log("savebook.req.body: ", req.body);
    db.Stocks.create(req.body).then(function (dbStocks,err) {
      if(err){
        console.log("err: ", err)
      }
      // console.log("dbStocks: ", dbStocks)
    });
  },
  getstocks: function(req, res) {
    // console.log("Object.keys(req): ", Object.keys(req));
    // console.log("getstocks.req.body: ", req.body);
    db.Stocks.findAll({}).then(function (dbStocks,err) {
      if(err){
        console.log("err: ", err)
      }
      res.json(dbStocks);
      // console.log("dbStocks: ", dbStocks)
    });
  },
  signup:function(req, res) {
    console.log("stocksController.signup:function(req.body: ", req.body)
  }
};
