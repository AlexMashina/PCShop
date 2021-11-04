import React from 'react';


const CartItem = React.memo(
  function CartItem({ id, name, imageURL, description, price, onClickAdd }) {
    const onAddItem = () => {
      const item = {
        id,
        name,
        imageURL,
        description,
        price
      };
      onClickAdd(item)
    }

    return (
      <div className="catalog-cartItem">
        <img src={imageURL} alt="" />
        <h4>{name}</h4>
        <p>{description}</p>
        <div className="cartItem-buttons">
          <div className="cartItem-buttons_price">{price} ₽</div>
          <div onClick={onAddItem} className="cartItem-buttons_curt"><span>В корзину</span></div>
        </div>
      </div>
    )
  }
)

export default CartItem
