import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import homeImage from "../assets/images/homepage.png";
import AppName from "../Components/AppName";
import LearningProgressBar from "../Components/LearningProgressBar";

import placeHolderImage from "../assets/images/placeholder-image.png";
import { FiArrowRight } from "react-icons/fi";
import CategoryListItem from "../Components/CategoryListItem";
import ContentListItem from "../Components/ContentListItem";

const HomePage = () => {
  const onSearchHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="home-page">
      <SearchBar
        onSearch={onSearchHandler}
        placeholder="Apa yang ingin kamu pelajari?"
      />
      <div className="home-page__section">
        <div className="home-page__greeting">
          <h1 className="home-page__greeting-title">Hi Satria! 👋</h1>
          <h2 className="home-page__greeting-subtitle">
            Mau belajar apa hari ini?
          </h2>
          <p className="home-page__greeting-text">
            Tingkatkan pengetahuan pada bidang favoritmu bersama <AppName />{" "}
            dengan alur belajar yang jelas
          </p>
          <Link className="home-page__greeting-button" to="/your-learning">
            Lanjut Belajar
          </Link>
        </div>
        <div className="home-page__image">
          <img src={homeImage} alt="foto home" />
        </div>
      </div>

      <div className="home-page__section">
        <div className="home-page__recently">
          <h1 className="home-page__recently-title">Terakhir diakses</h1>
          <div className="home-page__recently-list">
            <LearningProgressBar
              image={placeHolderImage}
              title="Front-End"
              percentage={60}
            />
            <LearningProgressBar
              image={placeHolderImage}
              title="Back-End"
              percentage={30}
            />
          </div>
          <div className="home-page__recently-footer">
            <Link className="home-page__recently-button" to="/your-learning">
              Selengkapnya <FiArrowRight size={18} />
            </Link>
          </div>
        </div>
        <div className="home-page__categories">
          <h1 className="home-page__categories-title">Kategori</h1>
          <div className="home-page__categories-list">
            <CategoryListItem image={placeHolderImage} category="React" />
            <CategoryListItem image={placeHolderImage} category="Android" />
            <CategoryListItem image={placeHolderImage} category="Kotlin" />
            <CategoryListItem image={placeHolderImage} category="Mewarnai" />
            <CategoryListItem image={placeHolderImage} category="Fotografi" />
            <CategoryListItem image={placeHolderImage} category="Futsal" />
            <CategoryListItem
              image={placeHolderImage}
              category="Bermain Yoyo"
            />
            <CategoryListItem image={placeHolderImage} category="Billiard" />
          </div>
          <div className="home-page__categories-footer">
            <Link className="home-page__categories-button" to="/categories">
              Selengkapnya <FiArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      <div className="home-page__section">
        <div className="home-page__recommendation">
          <h1 className="home-page__recommendation-title">
            Rekomendasi Konten Pembelajaran
          </h1>
          <div className="home-page__recommendation-list">
            <ContentListItem
              title="Perbedaan Microservices dan Monolith"
              image={placeHolderImage}
            />
            <ContentListItem
              title="Seni berbicara dalam kehidupan sehari-hari
              "
              image={placeHolderImage}
            />
            <ContentListItem
              title="Sejarah Internet"
              image={placeHolderImage}
            />
            <ContentListItem
              title="Apa itu kebahagiaan?"
              image={placeHolderImage}
            />
          </div>
          <div className="home-page__recommendation-footer">
            <Link
              className="home-page__recommendation-button"
              to="/recommendation"
            >
              Selengkapnya <FiArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      <div className="home-page__section">
        <div className="home-page__news">
          <h1 className="home-page__news-title">Berita</h1>
          <div className="home-page__news-list">
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
          <div className="home-page__recommendation-footer">
            <Link className="home-page__recommendation-button" to="/news">
              Selengkapnya <FiArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
