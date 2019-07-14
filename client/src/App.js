import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import FriendCard from "./components/FriendCard";
import Test from "./components/Test";
import DBdata from "./components/DBdata";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import StockTable from "./components/StockTable";
// import friends from "./friends.json";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Modal from "./components/Modal/Modal"
import TradingViewWidget from 'react-tradingview-widget';
import API from "./utils/API";
import axios from "axios";

/* ========================================================================
                              GLOBAL VARIABLES
   ======================================================================== */

let ticker = "";
let price = 0;
let stocksInfo = {}
let stock_ticker = {}
let search_ticker = ""
let stocksInfo_keys = []
let dbstocks = []
let signupformfirstname = ""
let signupformlastname = ""
let signupformusername = ""
let signupformpassword = ""
let guessmessage = 'Click an image to begin!'
let displaysignup = false
let displaysignin = false
let dom_signup = ""
let dom_signin = ""
class App extends Component {

  /* ========================================================================
                                SETTING STATE
     ======================================================================== */
  state = {
    showModal: false,
    ticker: ticker,
    price: price,
    stocksInfo: stocksInfo,
    search_ticker: search_ticker,
    stocksInfo_keys: stocksInfo_keys,
    dbstocks: dbstocks,
    signupformfirstname,
    signupformlastname,
    signupformusername,
    signupformpassword,
    displaysignup: displaysignup,
    displaysignin: displaysignin,
  };

  /* ========================================================================
                              FUNCTIONS
     ======================================================================== */

  // GET DATA FROM DB AND DISPALY CARDS ON PAGE LOAD
  componentDidMount() {
    this.getdbstockdata();

  }

  // START MODAL CODE
  // Modal Show and Close functions:
  handleShowMessageClick = (idx) => this.setState({ showModal: true, clickedIndex: idx })
  handleCloseModal = () => this.setState({ showModal: false })
  // END MODAL CODE

  // TRACKS WHAT GOES INTO THE SEARCH BAR
  handleInputChange = event => {
    this.setState({ ticker: event.target.value });
    console.log("event.target.value: ", event.target.value)
  };


  signUpFormSubmit = event => {
    event.preventDefault()
    console.log("signUpFormSubmit: ")
    let formdata = {
      firstname: this.state.signupformfirstname,
      lastname: this.state.signupformlastname,
      username: this.state.signupformusername,
      password: this.state.signupformpassword
    }
    API.sendSignUpForm(formdata)

  };

  signINFormSubmit = event => {
    event.preventDefault()
    console.log("signINFormSubmit")

  }

  handleFormInputChange = event => {
    console.log("event.target.value: ", event.target.value)
    console.log("event.target.name: ", event.target.name)
    this.setState({ [event.target.name]: event.target.value }, () => {
      console.log("this.state.signupformfirstname: ", this.state.signupformfirstname)
      console.log("this.state.signupformlastname: ", this.state.signupformlastname)
      console.log("this.state.signupformusername: ", this.state.signupformusername)
      console.log("this.state.signupformpassword: ", this.state.signupformpassword)
    });
  }



  searchTicker = query => {
    console.log("searchTicker")
    API.search(query)
      .then((res) => {
        console.log("Object.keys(res.data.data[0]): ", Object.keys(res.data.data[0]));
        console.log("stock xchange short: ", res.data.data[0].stock_exchange_short);
        stock_ticker[res.data.data[0].symbol] = res.data.data[0]
        this.setState({ price: res.data.data[0].price })
        this.setState({ stocksInfo: stock_ticker }, () => {
          stocksInfo_keys = Object.keys(this.state.stocksInfo)
          this.setState({ stocksInfo_keys: stocksInfo_keys }, () => {
            console.log("stocksInfo_keys: ", stocksInfo_keys)
          });
        })

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
        });

      })
      // .then(res => this.setState({ price: res.data }))
      .catch(err => console.log(err));
  };

  logout =  event => {
    event.preventDefault();
    API.logout().then((res) => {
      console.log(" logout res.data: ", res.data)
      // console.log(" getUseId res: ", Object.keys(res))
    })
  }

  getUserId = event => {
    event.preventDefault();
    console.log("Start getUserId")
    API.getUseId().then((res) => {
      console.log(" getUseId res.data: ", res.data)
      // console.log(" getUseId res: ", Object.keys(res))
    })
  }
  // GET DATA FROM THE DB
  getdbstockdata = event => {
    API.getstocks().then((res) => {
      console.log("res.data: ", res.data)
      this.setState({ dbstocks: res.data })
      console.log("This is dbstocks:", dbstocks)

    });
  }
  displaysignup_function = () => {

    if (!this.state.displaysignup) {
      this.setState({ displaysignup: true }, () => {
        console.log("this.state.displaysignup: ", this.state.displaysignup)
      })
    } else {
      this.setState({ displaysignup: false }, () => {
        console.log("this.state.displaysignup: ", this.state.displaysignup)
      })
    }
  }

  clicksignIN = () => {
    if (!this.state.displaysignin) {
      this.setState({ displaysignin: true }, () => {
        console.log("this.state.displaysignin: ", this.state.displaysignin)
      })
    } else {
      this.setState({ displaysignin: false }, () => {
        console.log("this.state.displaysignin: ", this.state.displaysignin)
      })
    }

  }

  // RUNS THE SUBMIT BUTTON, ONCLICK SETSTATE TICKER = TO WHAT'S IN THE SEARCH BAR
  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Clicked Submit")
    // https://stackoverflow.com/questions/30782948/why-calling-react-setstate-method-doesnt-mutate-the-state-immediately
    this.setState({ search_ticker: this.state.ticker }, () => {
      this.searchTicker(this.state.search_ticker);
    })
    event.value = "";
  };

  // componentDidUpdate(prevState) {
  //     // Typical usage (don't forget to compare props):
  //     if (this.state.ticker !== prevState.ticker) {
  //       this.getdbstockdata();
  //     }
  //   }
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {

    return (

      <Wrapper >

        <div>
          <Nav
            displaysignup_function={this.displaysignup_function}
            displaysignup={this.state.displaysignup}
          />


          {/* <SignUp
            handleFormInputChange={this.handleFormInputChange}
            signUpFormSubmit={this.signUpFormSubmit}
          /> */}
          <Router>
            <div>
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/signin" component={SignIn} />
            </div>
          </Router>


          <SearchBar
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            getdbstockdata={this.getdbstockdata}
            getUserId={this.getUserId}
            logout={this.logout}
          />
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='card-deck'>

                {this.state.dbstocks.map((data, idx) => (
                  <DBdata
                    data={data}
                    handleShowMessageClick={() => this.handleShowMessageClick(idx)}
                  />
                ))}

                {this.state.showModal ? (
                  <Modal onClose={this.handleCloseModal}>
                    <span>Ticker: {this.state.dbstocks[this.state.clickedIndex].ticker}</span>
                    <br />
                    <span>Stock Price: {this.state.dbstocks[this.state.clickedIndex].price}</span>
                    <span>Stock Xchange: {this.state.clickedIndex.stock_exchange_short}</span>
                    <TradingViewWidget symbol={`${this.state.dbstocks[this.state.clickedIndex].ticker}`} />
                  </Modal>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
