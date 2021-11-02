import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../redux/actions/categories";


const Categories = React.memo(
  function CategoriesPanel() {
    const dispatch = useDispatch();
    const activeCategory = useSelector(({ categories }) => categories.category);
    const labelName = ["Asus", "Honor", "HP", "Acer", "Lenovo"];
    
    const onSelectCategory = React.useCallback(
      (category) => {
        dispatch(setCategory(category))
      },
      [dispatch],
    )

    return (
      <ul className="header-category">
        <li onClick={() => onSelectCategory(null)} className={activeCategory === null ? "activeCategory" : ""}>Все</li>
        {labelName && labelName.map((category, index) => <Link key={`${category}_${index}`} to="/catalog" >
          <li onClick={ () => onSelectCategory(category) }
            className={activeCategory === category ? "activeCategory" : ""}>{category}</li>
        </Link>)}
      </ul>
    )
  }
)

export default Categories
