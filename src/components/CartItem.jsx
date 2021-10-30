import React from 'react'

function CartItem({ id, name, imageURL, description, price }) {
  return (
    <div className="catalog-cartItem">
      <img src={imageURL} alt="" />
      <h4>{name}</h4>
      <p>{description}</p>
      <div className="cartItem-buttons">
        <div className="cartItem-buttons_price">{price} р</div>
        <div className="cartItem-buttons_curt"><span>В корзину</span></div>
      </div>
    </div>
  )
}

export default CartItem