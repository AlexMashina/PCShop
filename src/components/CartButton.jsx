import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function CartButton() {
  const { totalCount } = useSelector(({ cart }) => cart)

  return (
    <Link to="/cart" >
      <div className="curt">
        Корзина: <span>{totalCount} шт.</span>
      </div>
    </Link>
  )
}

export default CartButton
