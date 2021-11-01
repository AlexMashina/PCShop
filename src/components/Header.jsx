import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setCategory } from "../redux/actions/categories";

const Header = React.memo(
  function Header() {
    const labelName = ["Asus", "Honor", "HP", "Acer", "Lenovo"];
    const dispatch = useDispatch();
    const activeCategory = useSelector(({ categories }) => categories.category);
    const totalCount = useSelector(( {cart} ) => cart.cartItems.length)


    const onSelectCategory = (category) => {
      dispatch(setCategory(category))
    }
    return (
      <header className="App-content-header">
        <div className="header-logo"><Link to="/"><span>PC</span>Shop</Link></div>
        <ul className="header-category">
          <li onClick={() => onSelectCategory(null)} className={activeCategory === null ? "activeCategory" : ""}>Все</li>
          {labelName && labelName.map((category, index) => <Link to="/catalog" >
            <li onClick={() => { onSelectCategory(category) }} key={`${category}_${index}`}
              className={activeCategory === category ? "activeCategory" : ""}>{category}</li>
          </Link>)}
        </ul>
        <Link to="/cart" >
          <div className="curt">
            Корзина: <span>{totalCount} шт.</span>
          </div>
        </Link>
      </header>
    )
  }
)

export default Header
