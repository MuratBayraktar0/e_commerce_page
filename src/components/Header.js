import React from "react";
import { Bag, User, Search } from "./header/index";
import "../style/header.css";
import logo from "../images/logo.png";

function Header(props) {
  const productCount = props.productCount;
  return (
    <div className="header">
      <div className="container">
        <img src={logo} height="45px" />
        <Search />
        <div className="icons">
          <User />
          <Bag productCount={productCount} />
        </div>
      </div>
    </div>
  );
}

export default Header;
