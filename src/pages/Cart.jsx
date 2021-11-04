import React from 'react';
import { useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";

import { CartItemAdded } from "../components";
import { clearCart, deleteCartItem } from '../redux/actions/cart';
import cartEmptyImage from "../assets/img/empty_cart.jpg";

function Cart() {
  const cartItems = useSelector( ({cart}) => cart.cartItems );
  const { totalCount, totalPrice } = useSelector(({cart}) => cart);
  const dispatch = useDispatch();

  const cartClear = React.useCallback(() => {
      dispatch(clearCart())
    }, [dispatch]
  )

  const cartItemDelete = React.useCallback((id) => {
    dispatch(deleteCartItem(id))
  }, [dispatch]

  )

  return (
    <section className="cart">
      {
        cartItems.length > 0 
        ? < div className = "cartInner" >
            <div className="cartItemsAdded">
              {cartItems.map((item) => <CartItemAdded clearCart={cartClear}
                                                      deleteCartItem={cartItemDelete}
                                                      {...item} />)}
            </div>
            <div className="cart_totalInfo">
              <div>Покупок {totalCount} шт.</div>
              <div>Сумма {totalPrice} ₽</div>
              <div>Оплатить</div>
              <div onClick={cartClear}>Отчистить корзину</div>
            </div>
          </div>

        : <div className="cartEmpty">
            <div className="cartEmpty_content">
              <h2>Ваша корзина пуста</h2>
              <img src={cartEmptyImage} alt="empty_cart" />
              <p>Вернулся назад и сделал покупку</p>
            </div>
            <Link to="/catalog"><div className="cartEmpty-buttons">Каталог...</div></Link>
          </div>
      }
    </section>
  )
}

export default Cart

  