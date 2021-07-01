import React from "react";
import "../style/bag.css";
import { RiShoppingBasketLine } from "react-icons/ri";

function Bag(props) {
  const productCount = props.productCount;
  return (
    <div className="bag">
      <div className="productCount">
        <span>{productCount}</span>
      </div>
      <RiShoppingBasketLine size="40px" color="white" />
    </div>
  );
}

export default Bag;
