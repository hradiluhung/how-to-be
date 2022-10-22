import React from "react";
import placeHolderImage from "../assets/images/placeholder-image.png";
import ContentListItem from "../Components/ContentListItem";

const RecommendationPage = () => {
  return (
    <div className="news-page">
      <div className="news-page__header">
        <h1 className="news-page__title">Rekomendasi Konten Pembelajaran</h1>
        <p className="news-page__subtitle">
          Berita terbaru seputar skill dan teknologi
        </p>
      </div>
      <div className="news-page__list">
        <ContentListItem
          title="Dasar Belajar Bermain Gitar Bagi Pemula"
          image={placeHolderImage}
        />
        <ContentListItem
          title="Penggunaan React-Router untuk URL Dinamis"
          image={placeHolderImage}
        />
        <ContentListItem
          title="Membuat Aplikasi ReactJS dengan React-Bootstrap"
          image={placeHolderImage}
        />
        <ContentListItem
          title="Laravel 8: Membuat CRUD API"
          image={placeHolderImage}
        />
        <ContentListItem
          title="Dasar Belajar Bermain Gitar Bagi Pemula"
          image={placeHolderImage}
        />
        <ContentListItem
          title="Penggunaan React-Router untuk URL Dinamis"
          image={placeHolderImage}
        />
        <ContentListItem
          title="Membuat Aplikasi ReactJS dengan React-Bootstrap"
          image={placeHolderImage}
        />
        <ContentListItem
          title="Laravel 8: Membuat CRUD API"
          image={placeHolderImage}
        />
      </div>
    </div>
  );
};

export default RecommendationPage;
