import React from "react";
import "../style/menu.css";
import { MenuItem } from "./menu/index";

function Menu() {
  return (
    <div className="menu">
      <div className="menuBar"></div>
      <div className="menuItems">
        <div className="menuContainer">
          <MenuItem name="Elektronik" />
          <MenuItem name="Moda" />
          <MenuItem name="Ev, Yasam, Kirtasiye, Ofis" />
          <MenuItem name="Oto, Bahce, Yapi, Market" />
          <MenuItem name="Anne, Bebek, Oyuncak" />
          <MenuItem name="Spor, Outdoor" />
          <MenuItem name="Kozmetik, Kişisel Bakım" />
          <MenuItem name="Süpermarket, Pet Shop" />
          <MenuItem name="Kitap, Müzik, Film, Hobi" />
        </div>
      </div>
    </div>
  );
}

export default Menu;
