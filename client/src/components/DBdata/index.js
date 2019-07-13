import React from "react";
import "./style.css";
import DBdataBtn from "../DBdataBtn/DBdataBtn"

function DBdata(props) {
  return (
    <DBdataBtn 
          data={props.data} 
          handleShowMessageClick={props.handleShowMessageClick}
          >
    </DBdataBtn>
  );
}

export default DBdata;
