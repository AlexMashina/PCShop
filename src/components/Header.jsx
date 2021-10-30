import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="App-content-header">
      <div className="header-logo"><Link to="/"><span>PC</span>Shop</Link></div>
      <ul className="header-category">
        <li>Все</li>
        <li>Asus</li>
        <li>Honor</li>
        <li>HP</li>
        <li>Acer</li>
        <li>Samsung</li>
        <li>Lenovo</li>
      </ul>
      <div className="curt">
        Корзина: <span>0 шт.</span>
      </div>
    </header>
  )
}

export default Header
