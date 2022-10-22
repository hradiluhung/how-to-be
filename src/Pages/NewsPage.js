import React from "react";
import placeHolderImage from "../assets/images/placeholder-image.png";
import ContentListItem from "../Components/ContentListItem";

const NewsPage = () => {
  return (
    <div className="news-page">
      <div className="news-page__header">
        <h1 className="news-page__title">Berita</h1>
        <p className="news-page__subtitle">
          Berita terbaru seputar skill dan teknologi
        </p>
      </div>
      <div className="news-page__list">
        <ContentListItem
          title="Info Beasiswa Bulan Desember 2022"
          image={placeHolderImage}
        />
        <ContentListItem
          title="Magang di Shopee sebagai UX Writer"
          image={placeHolderImage}
        />
        <ContentListItem
          title="Bootcamp terbaik 2022"
          image={placeHolderImage}
        />
        <ContentListItem
          title="Trik Mendapatkan Passive Income"
          image={placeHolderImage}
        />
        <ContentListItem
          title="Info Beasiswa Bulan Desember 2022"
          image={placeHolderImage}
        />
        <ContentListItem
          title="Magang di Shopee sebagai UX Writer"
          image={placeHolderImage}
        />
        <ContentListItem
          title="Bootcamp terbaik 2022"
          image={placeHolderImage}
        />
        <ContentListItem
          title="Trik Mendapatkan Passive Income"
          image={placeHolderImage}
        />
      </div>
    </div>
  );
};

export default NewsPage;
