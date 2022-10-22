import React from "react";
import { Link } from "react-router-dom";

const CategoryProfileListItem = ({ name, description }) => {
  return (
    <Link to="/learning/1" className="category-profile-item">
      <div className="category-profile-item__image">
        <img src="https://picsum.photos/200" alt="category" />
      </div>
      <div className="category-profile-item__info">
        <h3 className="category-profile-item__info_name">{name}</h3>
        <p className="category-profile-item__info_description">{description}</p>
      </div>
    </Link>
  );
};

export default CategoryProfileListItem;
