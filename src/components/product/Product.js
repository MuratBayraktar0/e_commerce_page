import React from "react";
import "../../style/product.css";

function Product(props) {
  const setProductCount = props.setProductCount;
  const productCount = props.productCount;
  const name = props.name;
  const image = props.image;
  const price = props.price;

  return (
    <div className="product">
      <img className="productImage" width="200px" src={image} />
      <div className="productName">
        <span>{name}</span>
      </div>
      <div className="productPrice">
        <span>{price}</span>
      </div>
      <div className="buttons">
        <button onClick={() => setProductCount(productCount + 1)}>
          Add Bag
        </button>
      </div>
    </div>
  );
}

export default Product;
