import React from "react";
import { FiEdit, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import AchievementItem from "../Components/AchievementItem";
import CategoryProfileListItem from "../Components/CategoryProfileListItem";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="profile-page__user-data">
        <div className="profile-page__user-data_image">
          <img src="https://picsum.photos/200" alt="user" />
        </div>
        <div className="profile-page__user-data_info">
          <h1 className="profile-page__user-data_info_name">
            Satri Baja Hitam Manis
          </h1>
          <p className="profile-page__user-data_info_date-joined">
            Bergabung sejak 22 Jun 2022
          </p>
          <p className="profile-page__user-data_info_location">
            <FiMapPin />
            <span>Kabupaten Wonogiri, Jawa Tengah</span>
          </p>
          <div className="profile-page__user-data_info_footer">
            <Link
              to="/profile/edit"
              className="profile-page__user-data_info_footer_edit-button"
            >
              <span>Edit Profil</span>
              <FiEdit />
            </Link>
          </div>
        </div>
      </div>
      <div className="profile-page__user-achievements">
        <AchievementItem name="diambil" sum={4} />
        <AchievementItem name="selesai" sum={1} />
        <AchievementItem name="total" sum={5} />
      </div>
      <div className="profile-page__followed-category">
        <h2 className="profile-page__followed-category_title">
          Kategori yang diikuti
        </h2>
        <div className="profile-page__followed-category_list">
          <CategoryProfileListItem
            name="Front-End Development"
            description="Belajar dasar-dasar Front-End Development"
          />
          <CategoryProfileListItem
            name="Back-End Development"
            description="Belajar dasar-dasar Back-End Development"
          />
          <CategoryProfileListItem
            name="Adobe Illustrator"
            description="Belajar dasar-dasar Adobe Illustrator"
          />
          <CategoryProfileListItem
            name="Belajar Gitar"
            description="Gitar merupakan alat musik yang sangat populer di Indonesia"
          />
          <CategoryProfileListItem
            name="Menggambar"
            description="Menggambar menggunakan alat seadanya dengan hasil yang bagus"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
