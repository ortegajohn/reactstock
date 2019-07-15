import React from "react";
import Modal from "../Modal/Modal"
import './stockCards.css'

function StockCards(props) {

  return (
      
      <div className="card"
          //  cardBG={props.cardBG}
           style={{backgroundColor: ((props.data.percentChange > 0) ? '#28a745' : '#dc3545')}}
           data={props.data}
           onClick={props.handleShowMessageClick}>
        
          {props.showModal ? (
              <Modal 
              onClose={this.handleCloseModal}>
              </Modal>
            ) : null}
              {props.data.ticker}
              <br/>
              Price: {props.data.price}
              <br/>
              {props.data.percentChange} 
      </div>
  );
}

export default StockCards;