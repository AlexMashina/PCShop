import React from 'react'

import { CartItem } from "../components";

const items = [{
  id: 1,
  name: "Acer Aspire 7 A715-75G-51FE (Intel Core i5 9300H 240",
  labelName: "Acer",
  imageURL: "https://nevateka.ru/upload/iblock/690/1469247_v01_b.jpg",
  description: "Игровой ноутбук, видеокарта Geforse 7900rs, 1 ТБ HDD,16гб оперативной памяти,процессор intel core i9",
  price: 63300
},
{
  id: 2,
  name: "Acer Aspire 7 A715-75G-51FE (Intel Core i5 9300H 240",
  labelName: "Acer",
  imageURL: "https://nevateka.ru/upload/iblock/690/1469247_v01_b.jpg",
  description: "Игровой ноутбук, видеокарта Geforse 7900rs, 1 ТБ HDD,16гб оперативной памяти,процессор intel core i9",
  price: 32200
},
{
  id: 3,
  name: "Acer Aspire 7 A715-75G-51FE (Intel Core i5 9300H 240",
  labelName: "Acer",
  imageURL: "https://nevateka.ru/upload/iblock/690/1469247_v01_b.jpg",
  description: "Игровой ноутбук, видеокарта Geforse 7900rs, 1 ТБ HDD,16гб оперативной памяти,процессор intel core i9",
  price: 45999
},
{
  id: 4,
  name: "Acer Aspire 7 A715-75G-51FE  ",
  labelName: "Acer",
  imageURL: "https://nevateka.ru/upload/iblock/690/1469247_v01_b.jpg",
  description: "Игровой ноутбук, видеокарта Geforse 7900rs, 1 ТБ HDD,16гб оперативной памяти,процессор intel core i9",
  price: 26700
}
]

function Catalog() {
  return (
    <section className="catalog">
      {
        items && items.map((item, index) => <CartItem key={`${index}_${item.price}`} {...item}/> )
      }
    </section>
  )
}

export default Catalog
