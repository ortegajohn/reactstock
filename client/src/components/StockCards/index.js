import React from "react";
import Modal from "../Modal/Modal"
import './stockCards.css'

function StockCards(props) {

  return (
      
      <div>
        <div className="card"
            //  cardBG={props.cardBG}
            style={{backgroundColor: ((props.data.percentChange > 0) ? '#28a745' : '#dc3545')}}
            data={props.data}
            onClick={props.handleShowMessageClick}
            >
          
            {props.showModal ? (
                <Modal 
                onClose={props.handleCloseModal}>
                </Modal>
              ) : null}
                {props.data.ticker}
                <br/>
                Price: {props.data.price}
                <br/>
                % Change: {props.data.percentChange} 
                <br/>
                Day High: {props.data.dayHigh}
                <br/>
        </div>
        <button id={"delBtn"} type="button" className="btn btn-warning" onClick={props.deleteDBstockData}>Remove</button>
      </div>

  );
}

export default StockCards;