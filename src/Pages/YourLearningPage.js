import React from "react";
import LearningProgressBar from "../Components/LearningProgressBar";
import SearchBar from "../Components/SearchBar";

import placeHolderImage from "../assets/images/placeholder-image.png";

const YourLearningPage = () => {
  return (
    <div className="your-learning-page">
      <div className="your-learning-page__header">
        <div className="your-learning-page__titles">
          <h1 className="your-learning-page__title">
            Kategori yang Anda Ikuti
          </h1>
          <p className="your-learning-page__subtitle">
            Selesaikan sesuai waktu yang disarankan!
          </p>
        </div>
        <div className="your-learning-page__search-bar">
          <SearchBar placeholder="Cari kategori" buttonType="icon" />
        </div>
      </div>
      <div className="your-learning-page__section">
        <h2 className="your-learning-page__section-title">
          Kelas Dalam Progres
        </h2>
        <div className="your-learning-page__list">
          <LearningProgressBar
            image={placeHolderImage}
            title="Front-End Development"
            percentage={60}
          />
          <LearningProgressBar
            image={placeHolderImage}
            title="Back-End Development"
            percentage={30}
          />
          <LearningProgressBar
            image={placeHolderImage}
            title="Adobe Illustrator"
            percentage={10}
          />
          <LearningProgressBar
            image={placeHolderImage}
            title="Belajar Gitar"
            percentage={50}
          />
        </div>
      </div>
      <div className="your-learning-page__section">
        <h2 className="your-learning-page__section-title">
          Kelas Telah Selesai
        </h2>
        <div className="your-learning-page__list">
          <LearningProgressBar
            image={placeHolderImage}
            title="Menggambar"
            percentage={100}
          />
        </div>
      </div>
    </div>
  );
};

export default YourLearningPage;
