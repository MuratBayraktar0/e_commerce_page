import React from "react";
import "../style/product.css";

function Product(props) {
  const setProductCount = props.setProductCount;
  const productCount = props.productCount;
  const name = props.name;
  const image = props.image;
  return (
    <div className="product">
      <img className="productImage" width="300px" src={image} />
      <h1>{name}</h1>
      <div className="buttons">
        <button>Go Detail</button>
        <button onClick={() => setProductCount(productCount + 1)}>
          Add Bag
        </button>
      </div>
    </div>
  );
}

export default Product;
