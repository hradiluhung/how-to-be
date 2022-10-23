import React from "react";
import placeHolderImage from "../assets/images/placeholder-image.png";
import ContentListItem from "../Components/ContentListItem";

const RecommendationPage = () => {
  return (
    <div className="news-page">
      <div className="news-page__header">
        <h1 className="news-page__title">Rekomendasi Konten</h1>
        <p className="news-page__subtitle">
          Informasi yang mungkin berguna untuk kamu
        </p>
      </div>
      <div className="news-page__list">
        <ContentListItem
          title="Perbedaan Microservices dan Monolith"
          image={placeHolderImage}
          content="recommendation"
        />
        <ContentListItem
          title="Seni berbicara dalam kehidupan sehari-hari"
          image={placeHolderImage}
          content="recommendation"
        />
        <ContentListItem
          title="Sejarah Internet"
          image={placeHolderImage}
          content="recommendation"
        />
        <ContentListItem
          title="How does Bill Gates's brain work?"
          image={placeHolderImage}
          content="recommendation"
        />
        <ContentListItem
          title="'Bagaimana' merupakan solusi"
          image={placeHolderImage}
          content="recommendation"
        />
        <ContentListItem
          title="Penggunaan React-Router untuk URL Dinamis"
          image={placeHolderImage}
          content="recommendation"
        />
        <ContentListItem
          title="I Love My Self"
          image={placeHolderImage}
          content="recommendation"
        />
        <ContentListItem
          title="Apa itu kebahagiaan"
          image={placeHolderImage}
          content="recommendation"
        />
      </div>
    </div>
  );
};

export default RecommendationPage;
