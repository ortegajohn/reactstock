import React, { Component } from "react";
// import FriendCard from "./components/FriendCard";
import Test from "./components/Test";
import DBdata from "./components/DBdata";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import StockTable from "./components/StockTable";
// import friends from "./friends.json";
import API from "./utils/API";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";



// var db = require("../../models");
let score = 0;
let topscore = 0;
let ticker = "";
let price = 0;
let stocksInfo = {}
let stock_ticker = {}
let search_ticker = ""
let stocksInfo_keys = []
let dbstocks = []
let guessmessage = 'Click an image to begin!'

let signupformfirstname = ""
let signupformlastname = ""
let signupformusername = ""
let signupformpassword = ""

class App extends Component {
  // Setting this.state.friends to the friends json array

  state = {
    score: score,
    topscore: topscore,
    guessmessage: guessmessage,
    ticker: ticker,
    price: price,
    stocksInfo: stocksInfo,
    search_ticker: search_ticker,
    stocksInfo_keys: stocksInfo_keys,
    dbstocks: dbstocks,
    signupformfirstname,
    signupformlastname,
    signupformusername,
    signupformpassword
  };

  handleInputChange = event => {
    this.setState({ ticker: event.target.value });
    console.log("event.target.value: ", event.target.value)

  };

  searchTicker = query => {
    console.log("searchTicker")
    API.search(query)
      .then((res) => {
        // console.log("res.data.data[0].price: ", res.data.data[0].price)
        // console.log("Object.keys(res.data.data[0]): ", Object.keys(res.data.data[0]));
        // console.log("res.data.data[0].name: ", res.data.data[0].name)
        // console.log("res.data.data[0].change_pct: ", res.data.data[0].change_pct)
        // console.log("res.data.data[0].volume_avg: ", res.data.data[0].volume_avg)
        // console.log("res.data.data[0].symbol: ", res.data.data[0].symbol)
        // stock_ticker = {[res.data.data[0].symbol]:res.data.data[0]}
        stock_ticker[res.data.data[0].symbol] = res.data.data[0]
        // console.log("stock_ticker: ", stock_ticker)
        this.setState({ price: res.data.data[0].price })
        this.setState({ stocksInfo: stock_ticker }, () => {
          stocksInfo_keys = Object.keys(this.state.stocksInfo)
          this.setState({ stocksInfo_keys: stocksInfo_keys }, () => {
            console.log("stocksInfo_keys: ", stocksInfo_keys)
          });
        })
        // console.log("this.state.stocksInfo: ", this.state.stocksInfo)
        // let x = Object.keys(res.data.data[0])
        // console.log("this.state.stocksInfo.length: ", x.length)
        // console.log("x: ", x)

        var test = {
          ticker: this.state.ticker,
          price: res.data.data[0].price,
          name: res.data.data[0].name,
          open: res.data.data[0].price_open,
          percentChange: res.data.data[0].change_pct,
          dayHigh: res.data.data[0].day_high,
          dayLow: res.data.data[0].day_low,
          marketCap: res.data.data[0].market_cap,
          avgVol: res.data.data[0].volume_avg
        }

        API.savestock(test).then((res) => {
          console.log("res: ", res)
          // console.log("res.data.data[0].price: ", res.data.data[0].price)
          // console.log("this.state.price: ", this.state.price)
          // this.setState({ price: res.data.data[0].price })

        });


      })
      // .then(res => this.setState({ price: res.data }))
      .catch(err => console.log(err));
  };

  getdbstockdata = event => {
    event.preventDefault();
    API.getstocks().then((res) => {
      console.log("res.data: ", res.data)
      this.setState({ dbstocks: res.data })

    });


  }


  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Clicked Submit")
    // https://stackoverflow.com/questions/30782948/why-calling-react-setstate-method-doesnt-mutate-the-state-immediately
    this.setState({ search_ticker: this.state.ticker }, () => {
      this.searchTicker(this.state.search_ticker);
    })


    event.value = "";
    // db.Stocks.create(test).then(function (dbStocks) {
    //   console.log("dbStocks: ", dbStocks)
    // });

  };

  //   sendThru(event) {
  //     event.value = "";    
  // }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper >
        <Nav></Nav>
        <SignUp></SignUp>
        <SignIn></SignIn>
        <SearchBar
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          getdbstockdata={this.getdbstockdata}
        />
    
        <StockTable
          search_ticker={this.state.search_ticker}
          price={this.state.price}
          stocksInfo={this.state.stocksInfo}
        />

        {/* 
        {this.state.friends.map(friend => (
          <FriendCard
            handleIncrement={this.handleIncrement}
            id={friend.id}
            key={friend.id} s
            name={friend.name}
            image={friend.image}
          />

        ))} */}

        <div>
          {this.state.stocksInfo_keys.map(ticker => (
            <Test
              ticker={this.state.stocksInfo[ticker]}
            />

          ))}

          <div>
            {this.state.dbstocks.map(data => (
              <DBdata
                data={data}
                
              />

            ))}

          </div>



        </div>





      </Wrapper>
    );
  }
}

export default App;
