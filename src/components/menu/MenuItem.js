import React from "react";
import "../../style/menu.css";

function MenuItem(props) {
  return <div className="menuItem">{props.name}</div>;
}

export default MenuItem;
