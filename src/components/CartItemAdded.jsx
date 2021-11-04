import React from 'react';

import trash from "../assets/img/trash.png";

const CartItemAdded = React.memo(
  function CartItemAdded({ id, name, imageURL, description, price, deleteCartItem }) {
    return (
      <div className="cartItemAdded">
        <img src={imageURL} alt="" />
        <div className="cartItemInfo">
          <h4>{name}</h4>
          <p>{description}</p>
          <div className="cartItem_price">{price} ₽</div>
        </div>
          <div onClick={() => deleteCartItem(id)} className="cartItem_button-delete">
            <img src={trash} alt="trash" />
        </div>
      </div>
    )
  }
)

export default CartItemAdded
