const db = require("../models");
var sequelize = require("sequelize");

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
    console.log("Object.keys(req): ", Object.keys(req));
    console.log("savebook.req.body: ", req.body);
    db.Stocks.create(req.body).then(function (dbStocks,err) {
      if(err){
        console.log("err: ", err)
      }
      // console.log("dbStocks: ", dbStocks)
    });
  },
  updateStocks: function (req, res) {
    console.log("req.body from updateStocks route: ", req.body)
    db.Stocks.bulkCreate(
    [
      {ticker: req.body.ticker}
    ],
    {
      updateOnDuplicate: true,
    },
    ).then(() => {
      return db.Stocks.update(
        {dayHigh: req.body.day_high},
        {where: {ticker: req.body.ticker}}
      );
    }).then(([affectedCount, affectedRows]) => {
      return db.Stocks.findAll();
    }).then(dbstocks => {
      console.log('this is dbstocks from updateStocks: ', dbstocks)
    })
  },

  getstocks: function(req, res) {
    // console.log("Object.keys(req): ", Object.keys(req));
    // console.log("getstocks.req.body: ", req.body);
    // console.log("Keys req.user: ", Object.keys(req.user));
    console.log("req.user: ", typeof req.user);

    if(req.user == undefined){
      db.Stocks.findAll({

        // where: sequelize.where(
        //   sequelize.literal('user_id'),
        //   '=',
        //   req.user.id
        // )
      }).then(function (dbStocks,err) {
        if(err){
          console.log("err: ", err)
        }
        res.json(dbStocks);
        // console.log("dbStocks: ", dbStocks)
      });



    }
    if(req.user != undefined){
      db.Stocks.findAll({

        where: sequelize.where(
          sequelize.literal('user_id'),
          '=',
          req.user.id
        )
      }).then(function (dbStocks,err) {
        if(err){
          console.log("err: ", err)
        }
        res.json(dbStocks);
        // console.log("dbStocks: ", dbStocks)
      });

    }



  },
  signup:function(req, res) {
    console.log("stocksController.signup:function(req.body: ", req.body)
  }
};
