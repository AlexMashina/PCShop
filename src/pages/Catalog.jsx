import React, { useMemo } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { CartItem, LoadingItem } from "../components";
import { fetchItems } from "../redux/actions/catalog";
import { addItem } from "../redux/actions/cart";



function Catalog() {
  const dispatch = useDispatch();
  const items = useSelector(({ catalog }) => catalog.catItems);
  const isLoaded = useSelector(({ catalog }) => catalog.isLoaded);
  const activeCategory = useSelector(({ categories }) => categories.category);

  React.useEffect(() => {
    dispatch(fetchItems(activeCategory))
  }, [dispatch, activeCategory])

  const  onClickAddToCart = React.useCallback((item) => {
     dispatch(addItem(item))
  }, [dispatch])
  
  return (
    <section className="catalog">
      {
        useMemo(() => isLoaded
          ? items && items.map((item, index) => <CartItem onClickAdd={onClickAddToCart} key={`${index}_${item.price}`} {...item} />)
          : Array(8).fill(0).map((_, index) => <LoadingItem key={index} />),
          [isLoaded, items])
      }
    </section>
  )
}

export default Catalog
