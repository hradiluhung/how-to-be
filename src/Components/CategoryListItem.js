import React from "react";
import { Link } from "react-router-dom";

const CategoryListItem = ({ image, category }) => {
  return (
    <div className="category-item">
      <Link to="/learning/:id" className="category-item__image">
        <img src={image} alt={image} />
      </Link>
      <p className="category-item__name">{category}</p>
    </div>
  );
};

export default CategoryListItem;
