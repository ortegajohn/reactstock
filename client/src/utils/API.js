import axios from "axios";
// import request from "request";

// const ticker = "GDX"
const BASEURL = "https://www.worldtradingdata.com/api/v1/stock?symbol=";
const APIKEY = "&api_token=NwKKaeNpI8lA9hVpjtqqdvqYWWqHf7EMegaRidS6DdgdwVja8b67OyCdH9n7";

export default {
  search: function(ticker) {
    return axios.get(BASEURL + ticker + APIKEY);
  },

  savestock: function(booksData) {
    
    return axios.post("/api/stocks", booksData);
  },

  getstocks: function(req, res) {
    console.log("API.getstocks req",req)
    console.log("API.getstocks res",res)
    return axios.get("/api/getstocks", res);
  },

  sendSignUpForm: function(SignUpFormData){
    console.log("API.sendSignUpForm SignUpFormData",SignUpFormData)
    return axios.post("/signup", SignUpFormData);
    // return axios.post("/api/signup", SignUpFormData);
  },

  sendSignUpForm: function(SignInFormData){
    console.log("API.sendSignUpForm SignUpFormData",SignInFormData)
    return axios.post("/signin", SignInFormData);
    // return axios.post("/api/signup", SignUpFormData);
  },
  getUseId: function(req, res){
    return axios.get("/api/getuserid");
  }
};
