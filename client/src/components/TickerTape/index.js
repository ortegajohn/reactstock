import React from 'react';

export default class TickerTape extends React.Component {
  constructor(props) {
    super(props);
  }

  

  componentDidMount() {

    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
    s.async = {
        "symbols": [
{
              "title": "S&P 500",
              "proName": "OANDA:SPX500USD"
            },
            {
              "title": "Shanghai Composite",
              "proName": "INDEX:XLY0"
            },
            {
              "title": "EUR/USD",
              "proName": "FX_IDC:EURUSD"
            },
            {
              "title": "BTC/USD",
              "proName": "BITSTAMP:BTCUSD"
            },
            {
              "title": "ETH/USD",
              "proName": "BITSTAMP:ETHUSD"
            }
          ],
          "colorTheme": "light",
          "isTransparent": false,
          "displayMode": "adaptive",
          "locale": "en"
          };
    s.innerHTML = "document.write('This is output by document.write()!')";
    this.instance.appendChild(s);
  }

  render() {
    return (


        <div class="tradingview-widget-container">
       <div class="tradingview-widget-container__widget"></div>
         <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/AMEX-GDX/" rel="noopener" target="_blank"><span class="blue-text">GDX Quotes</span></a> by TradingView</div>
    <div ref={el => (this.instance = el)} />
    </div>

    )
  }
}