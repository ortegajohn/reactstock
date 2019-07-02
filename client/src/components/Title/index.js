import React from "react";
import "./style.css";

function Title(props) {
  console.log("props.children: ",props.children)
  return <nav className="title header navbar-fixed-top" >{props.children}</nav>;

}


export default Title;
