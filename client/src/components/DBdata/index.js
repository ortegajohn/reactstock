import React, { Component } from "react";
import "./style.css";
import DBdataBtn from "../DBdataBtn/DBdataBtn"

class DBdata extends Component {
  
  componentDidUpdate(prevProps, prevState) {
    // Typical usage (don't forget to compare props):
    if (this.props.stocksInfo_keys !== prevProps.stocksInfo_keys) {
      console.log("preparing to fire!");
      this.props.getdbstockdata();
      console.log("Firing getdbstockdata!");
    }
  }
  render() {
    
    return (
      <DBdataBtn 
            stocksInfo_keys = {this.props.stocksInfo_keys}
            data={this.props.data}
            getdbstocksdata={this.props.getdbstockdata} 
            handleShowMessageClick={this.props.handleShowMessageClick}
            >
      </DBdataBtn>

    );
  }
}

export default DBdata;
