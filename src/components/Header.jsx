import React from "react";
import { Link } from "react-router-dom";

import { Categories, CartButton } from "../components";

  function Header() {

    return (
      <header className="App-content-header">
        <div className="header-logo"><Link to="/"><span>PC</span>Shop</Link></div>
        <Categories />
        <CartButton />
      </header>
    )
  }

export default Header
