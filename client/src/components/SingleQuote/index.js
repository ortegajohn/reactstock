import React from 'react';

// {var t=document.createElement("script");
// t.id=_,
// t.type="text/javascript",
// t.async=!0,t.src="https://s3.tradingview.com/tv.js",
// t.onload=e,document.getElementsByTagName("head")[0].appendChild(t)}


export default class SingleQuote extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    

    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js"
    s.async = true;
    
    s.innerHTML = {
      "symbol": "AMEX:GDX",
  "width": 350,
  "colorTheme": "light",
  "isTransparent": false,
  "locale": "en"
          };
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