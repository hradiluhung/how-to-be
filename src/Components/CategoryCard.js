import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ title, duration }) => {
  return (
    <Link to="/learning/2" className="category-card">
      <h1 className="category-card__title">{title}</h1>
      <p className="category-card__duration">
        Durasi waktu belajar: <b>{duration}</b>
      </p>
    </Link>
  );
};

export default CategoryCard;
