import axios from "axios";
// import request from "request";

// const ticker = "GDX"
const BASEURL = "https://www.worldtradingdata.com/api/v1/stock?symbol=";
const APIKEY = "&api_token=lIKhQVypBswwedWGj8P5cK6lkYekVwecEbUAO6lLGAYIZVoWcTRUZfSSC9Qa";

export default {
  search: function(ticker) {
    return axios.get(BASEURL + ticker + APIKEY);
  },

  savestock: function(stockData) {
    return axios.post("/api/stocks", stockData);
  },

  getstocks: function(req, res) {
    return axios.get("/api/getstocks", res);
  },

  updateStocks: function(stockData) {
    console.log("stockData from API - updateStocks: ", stockData)
    return axios.put("/api/updateStocks", stockData)
  },

  deleteStocks: function(delTicker) {
    console.log("delTicker from Delete API: ", delTicker)
    return axios.post("/api/deleteStocks", delTicker).then( function(req, res) {
        console.log("reqZ: ", req)
        console.log("resZ: ", res)
    })
  },

  sendSignUpForm: function(SignUpFormData){
    console.log("API.sendSignUpForm SignUpFormData",SignUpFormData)
    return axios.post("/signup", SignUpFormData);
    // return axios.post("/api/signup", SignUpFormData);
  },

  sendSignInForm: function(SignInFormData){
    console.log("API.sendSignUpForm SignUpFormData",SignInFormData)
    return axios.post("/signin", SignInFormData);
    // return axios.post("/api/signup", SignUpFormData);
  },
  getUseId: function(req, res){
    return axios.get("/api/getuserid");
  },
  logout: function(){
    return axios.get("/api/logout");
  }
};