import React from "react";
import placeHolderImage from "../assets/images/placeholder-image.png";
import ContentListItem from "../Components/ContentListItem";

const RecommendationPage = () => {
  return (
    <div className="news-page">
      <div className="news-page__header">
        <h1 className="news-page__title">Rekomendasi Konten</h1>
        <p className="news-page__subtitle">
          Berita terbaru seputar skill dan teknologi
        </p>
      </div>
      <div className="news-page__list">
        <ContentListItem
          title="Perbedaan Microservices dan Monolith"
          image={placeHolderImage}
        />
        <ContentListItem
          title="Seni berbicara dalam kehidupan sehari-hari"
          image={placeHolderImage}
        />
        <ContentListItem title="Sejarah Internet" image={placeHolderImage} />
        <ContentListItem
          title="How does Bill Gates's brain work?"
          image={placeHolderImage}
        />
        <ContentListItem
          title="'Bagaimana' merupakan solusi"
          image={placeHolderImage}
        />
        <ContentListItem
          title="Penggunaan React-Router untuk URL Dinamis"
          image={placeHolderImage}
        />
        <ContentListItem title="I Love My Self" image={placeHolderImage} />
        <ContentListItem title="Apa itu kebahagiaan" image={placeHolderImage} />
      </div>
    </div>
  );
};

export default RecommendationPage;
