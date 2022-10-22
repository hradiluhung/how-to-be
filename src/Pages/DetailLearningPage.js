import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";

import frontEndImage from "../assets/images/category-image/frontend.png";
import MaterialGroupCollapseable from "../Components/MaterialGroupCollapseable";
import UnfollowMaterialModal from "../Components/UnfollowMaterialModal";
import { getCategoryById, getMaterialByCategoryId } from "../Utils/data";

const DetailLearningPage = () => {
  const { id } = useParams();
  const [isFollowed, setIsFollowed] = useState(() => {
    if (id === "1") {
      return true;
    } else if (id === "2") {
      return false;
    }
  });
  const [category, setCategory] = useState({});
  const [materials, setMaterials] = useState([]);
  const [isModalOpened, setIsModalOpened] = useState(false);

  useEffect(() => {
    setCategory(getCategoryById(id));
    setMaterials(getMaterialByCategoryId(id));
  }, [id]);

  const onFollowClickHandler = () => {
    setIsFollowed(true);
  };

  const onUnfollowClickHandler = () => {
    setIsFollowed(false);
    closeModal();
  };

  const openModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  return (
    <>
      <div className="detail-learning-page">
        <div className="detail-learning-page__banner">
          <img src={frontEndImage} alt={frontEndImage} />
          <div className="detail-learning-page__overlay">
            <div className="detail-learning-page__overlay-content">
              <div className="detail-learning-page__text">
                <h1 className="detail-learning-page__title">{category.name}</h1>
                <p className="detail-learning-page__subtitle">
                  Rekomendasi waktu pembelajaran: <b>{category.duration}</b>
                </p>
              </div>
              {isFollowed ? (
                <button
                  className="detail-learning-page__button"
                  onClick={openModal}
                >
                  <FaMinus />
                  Berhenti
                </button>
              ) : (
                <button
                  className="detail-learning-page__button--follow"
                  onClick={onFollowClickHandler}
                >
                  <FaPlus />
                  Ikuti
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="detail-learning-page__list">
          {materials.map((material) => (
            <MaterialGroupCollapseable
              key={material.id}
              id={material.id}
              name={material.name}
              desc={material.description}
              isFollowed={isFollowed}
            />
          ))}
        </div>
      </div>
      {isModalOpened && (
        <UnfollowMaterialModal
          closeModal={closeModal}
          onUnfollow={onUnfollowClickHandler}
        />
      )}
    </>
  );
};

export default DetailLearningPage;
