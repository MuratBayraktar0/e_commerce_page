import React from "react";
import { Bag } from "./";
import "../style/header.css";

function Header(props) {
  const productCount = props.productCount;
  return (
    <div className="header">
      <Bag productCount={productCount} />
    </div>
  );
}

export default Header;
