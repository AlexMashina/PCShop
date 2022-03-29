import React from 'react';

import trash from "../images/trash.png";


function CartItemAdded({name, imageURL, description, price, deleteCartItem, index }) {
    return (
      <div className="cartItemAdded">
        <img src={imageURL} alt="" />
        <div className="cartItemInfo">
          <h4>{name}</h4>
          <p>{description}</p>
          <div className="cartItem_price">{price} ₽</div>
        </div>
          <div onClick={() => deleteCartItem(index)} className="cartItem_button-delete">
            <img src={trash} alt="trash" />
        </div>
      </div>
    )
  }


export default CartItemAdded
