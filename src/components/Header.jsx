import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const labelName = ["Asus", "Honor", "HP", "Acer", "Lenovo"];

  return (
    <header className="App-content-header">
      <div className="header-logo"><Link to="/"><span>PC</span>Shop</Link></div>
      <ul className="header-category">
        <li className="activeCategory">Все</li>
        {labelName.map((item) => <li>{item}</li>) }
      </ul>
      <div className="curt">
        Корзина: <span>0 шт.</span>
      </div>
    </header>
  )
}

export default Header
