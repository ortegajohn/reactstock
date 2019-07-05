// import React, { Component } from 'react'
import React from 'react'
import "./style.css";



let getkeys = (ticker, obj) => {
    let a = Object.keys(obj)
    let avg_vol
    let name
    console.log("ZZZZZZticker: ", ticker)
    console.log("ZZZZZZ: ", Object.keys(obj))
    if (ticker !== undefined) {
        if (a.length > 0) {
            a.forEach(function (element) {
                console.log("MMM", element)
                if (element.toUpperCase() === ticker.toUpperCase()) {
                    console.log("YYYYYY: ", obj[ticker.toUpperCase()].volume_avg)
                    avg_vol = obj[ticker.toUpperCase()].volume_avg
                    name = obj[ticker.toUpperCase()].name
                }
            })

            // let c = Object.keys(obj[ticker])

            // if (c.length > 0){

            // }

        }
    }

    return (
        <div>
            <div>{avg_vol}</div>
            <div>{name}</div>
        </div>
    )
}

const StockTable = props => {


    return (
        <div>
            <div>Stock</div>
            <div>{props.search_ticker}</div>
            <div>{props.price}</div>
            <div value={"testvalue"}></div>
            <div>
                {getkeys(props.search_ticker, props.stocksInfo)}
            </div>
        </div>
    )

}


export default StockTable;
