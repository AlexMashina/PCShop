import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import  cartImage  from "../assets/img/cart.png";


function CartButton() {
  const { totalCount, totalPrice } = useSelector(({ cart }) => cart)

  return (
    <Link to="/cart" >
      <div className="curt">
        <div>{totalPrice} ₽</div>
        <img src={cartImage} alt="" /> <span>{totalCount}</span>
      </div>
    </Link>
  )
}

export default CartButton
