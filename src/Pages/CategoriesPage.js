import React from "react";
import SearchBar from "../Components/SearchBar";

import CategoryCard from "../Components/CategoryCard";

const CategoriesPage = () => {
  return (
    <div className="categories-page">
      <div className="categories-page__header">
        <div className="categories-page__titles">
          <h1 className="categories-page__title">Kategori </h1>
          <p className="categories-page__subtitle">
            Cari kategori yang akan kamu pelajari
          </p>
        </div>
        <div className="categories-page__search-bar">
          <SearchBar placeholder="Cari kategori" buttonType="icon" />
        </div>
      </div>
      <div className="categories-page__list">
        <CategoryCard title="React Development" duration="1-2 Bulan" />
        <CategoryCard title="Android Development" duration="3 Bulan" />
        <CategoryCard title="Kotlin Development" duration="1-2 Bulan" />
        <CategoryCard title="Mewarnai" duration="1-2 Bulan" />
        <CategoryCard title="Fotografi" duration="1-2 Bulan" />
        <CategoryCard title="Futsal" duration="3 Bulan" />
        <CategoryCard title="Bermain Yoyo" duration="1-2 Bulan" />
        <CategoryCard title="Billiard" duration="1-2 Bulan" />
        <CategoryCard title="Anggar" duration="1-2 Bulan" />
        <CategoryCard title="Statistika" duration="3 Bulan" />
      </div>
    </div>
  );
};

export default CategoriesPage;
