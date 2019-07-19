import React, { Component } from "react";
import "./style.css";
import StockCards from "../StockCards"

class StockCardHolder extends Component {
  
  componentDidUpdate(prevProps, prevState) {
    // Typical usage (don't forget to compare props):
    
    if (this.props.stocksInfo_keys !== prevProps.stocksInfo_keys) {
      this.props.getdbstockdata();
    }
  }

  
  render() {
    
    return (
      <StockCards
            stocksInfo_keys = {this.props.stocksInfo_keys}
            data={this.props.data}
            getdbstocksdata={this.props.getdbstockdata} 
            handleShowMessageClick={this.props.handleShowMessageClick}
            deleteDBstockData={this.props.deleteDBstockData}
            >
      </StockCards>

    );
  }
}

export default StockCardHolder;
