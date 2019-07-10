import React from "react";
import Modal from "../Modal/Modal"
import './DBdataBtn.css'

function DBdataBtn(props) {
  return (
        
        <div className="card" data={props.data} onClick={props.handleShowMessageClick}>
            {props.showModal ? (
                <Modal 
                onClose={this.handleCloseModal}>
                this is the modal
                </Modal>
            ) : null}
                {props.data.ticker}
                <br/>
                {props.data.price} 
        </div>
  );
}

export default DBdataBtn;