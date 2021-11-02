import React from 'react';
import { useDispatch, useSelector} from "react-redux";

function Cart() {
  const cartItems = useSelector( ({cart}) => cart.cartItems );
  const totalCount = useSelector(({ cart }) => cart.totalCount);

  return (
    <section className="cart">
      {
        cartItems.length > 0 
        ? <div className="cartHeader">
            <div>Корзина</div>
            <div>{totalCount}</div>
          </div>

        : <p>Ваша корзина пуста</p>  
      }
    </section>
  )
}

export default Cart
