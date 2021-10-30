import React from 'react'
import { Link } from "react-router-dom";

import news_pc from "../assets/img/news_pc.jpg";

function News() {
  return (
    <section className="App-content-news">
      <div className="content-news">
        <div className="news-title">
          <h2><span>П</span>окупайте лучшие ноутбуки.
            По лучшим скидкам<span>!</span>
          </h2>
          <p className="news-description">Ноутбук <span>Acer Predator Helios</span>, 15.6", IPS, Intel Core i7 11800H 2.3ГГц, 16ГБ, 1ТБ SSD, NVIDIA GeForce RTX 3050 Ti для ноутбуков - 4096 Мб, Windows 10, NH.QC5ER.002, черный</p>
          <a href="#">Подробнее</a>
        </div>
        <img className="news-pc" src={news_pc} alt="Картинка ноутбука" />
      </div>
      <div className="news-button_catalog"><Link to="/catalog">Каталог...</Link></div>
    </section>
  )
}

export default News
