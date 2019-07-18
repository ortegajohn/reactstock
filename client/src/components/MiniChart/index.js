import React from 'react';

export default class MiniChart extends React.Component {
  constructor(props) {
    super(props);
  }

  

  componentDidMount() {

    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js"
    s.async = {
        "symbol": "GDX",
        "width": 350,
        "colorTheme": "light",
        "isTransparent": false,
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



// import React from "react";
// import "./style.css";

// const MiniChart = props => {
//     componentDidMount() {
//     const script = document.createElement("script")
//     // let script = ""
//     script.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js"
//     script.type = "text/javascript"
//     script.async = {
//         "symbol": "AMEX:GDX",
//     "width": 350,
//     "colorTheme": "light",
//     "isTransparent": false,
//     "locale": "en"
//   };
//     }
    
//     return (

//         <div class="tradingview-widget-container">
//             <div class="tradingview-widget-container__widget"></div>
//             <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/AMEX-GDX/" rel="noopener noreferrer" target="_blank"><span class="blue-text">GDX Quotes</span></a> by TradingView</div>
//             {script}
//         </div>

//     )
// }


// export default MiniChart;