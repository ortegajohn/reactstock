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
    console.log("stockData from API: ", stockData)
    return axios.put("/api/updateStocks", stockData)
  },

  sendSignUpForm: function(SignUpFormData){
    console.log("API.sendSignUpForm SignUpFormData",SignUpFormData)
    return axios.post("/signup", SignUpFormData);
    // return axios.post("/api/signup", SignUpFormData);
  }
};
