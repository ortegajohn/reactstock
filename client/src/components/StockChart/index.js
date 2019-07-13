import React from "react";
import "./style.css";
import TradingViewWidget from 'react-tradingview-widget';

function StockChart(props) {
    return (
        
<div className="tradingview-widget-container">
  <div id="tradingview_67119"></div>
  <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/NASDAQ-AAPL/" rel="noopener" target="_blank"><span className="blue-text">AAPL Chart</span></a> by TradingView</div>
  <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
  <script type="text/javascript">

  </script>
</div>

    );
}

export default StockChart;
