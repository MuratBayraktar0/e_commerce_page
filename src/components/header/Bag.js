import React from "react";
import "../../style/header.css";
import { RiShoppingBasketLine } from "react-icons/ri";

function Bag(props) {
  const productCount = props.productCount;
  return (
    <div className="bag">
      <div className="productCount">
        <span>{productCount}</span>
      </div>
      <RiShoppingBasketLine size="40px" color="rgb(28, 55, 114)" />
    </div>
  );
}

export default Bag;
