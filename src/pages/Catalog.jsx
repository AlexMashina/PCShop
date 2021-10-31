import axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { CartItem, LoadingItem } from "../components";
import { fetchItems } from "../redux/actions/catalog";



function Catalog() {
  const dispatch = useDispatch();
  const items = useSelector(({catalog}) => catalog.catItems);
  const isLoaded = useSelector( ({catalog}) => catalog.isLoaded);

  React.useEffect(() => {
    dispatch(fetchItems(null))
  }, [dispatch])

  return (
    <section className="catalog">
       {
        isLoaded 
        ? items && items.map((item, index) => <CartItem key={`${index}_${item.price}`} {...item} />)
        : Array(8).fill(0).map((_, index) => <LoadingItem key={index}/>)
       }  
    </section>
  )
}

export default Catalog
