import React from "react";
import Modal from "../Modal/Modal"
import './DBdataBtn.css'

function DBdataBtn(props) {
  return (
        
        <div className="card" data={props.data} onClick={props.handleShowMessageClick}>
            {props.showModal ? (
                <Modal 
                onClose={this.handleCloseModal}>
                </Modal>
            ) : null}
                {props.data.ticker}
                <br/>
                {props.data.price}
                {props.data.stock_exchange_short} 
 
        </div>
  );
}

export default DBdataBtn;