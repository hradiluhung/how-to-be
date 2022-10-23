import React, { useState } from "react";
import { FiArrowDownCircle, FiArrowUpCircle, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

const SubMaterialCollapseable = ({ name, desc, link, isFollowed }) => {
  const [isCollapse, setIsCollapse] = useState(true);
  const [isDone, setIsDone] = useState(false);

  const onToggleCollapse = (event) => {
    event.stopPropagation();
    setIsCollapse(!isCollapse);
  };

  const onToggleDone = (event) => {
    event.stopPropagation();
    setIsDone(!isDone);
  };

  return (
    <div className="sub-material-collapseable">
      <div
        className="sub-material-collapseable__header"
        onClick={onToggleCollapse}
      >
        <h2 className="sub-material-collapseable__name">{name}</h2>
        <div className="sub-material-collapseable__buttons">
          {isFollowed ? (
            !isDone ? (
              <div
                className="sub-material-collapseable__done-button"
                onClick={onToggleDone}
              >
                <FiCheck />
              </div>
            ) : (
              <div
                className="sub-material-collapseable__done-button--active"
                onClick={onToggleDone}
              >
                <FiCheck />
              </div>
            )
          ) : (
            <div className="sub-material-collapseable__done-button--disabled">
              <FiCheck />
            </div>
          )}
          {!isCollapse ? (
            <FiArrowUpCircle size={20} />
          ) : (
            <FiArrowDownCircle size={20} />
          )}
        </div>
      </div>
      {!isCollapse && (
        <div className="sub-material-collapseable__contents">
          <div className="sub-material-collapseable__section">
            <h3 className="sub-material-collapseable__subtitle">
              Video Pembelajaran
            </h3>
            <div className="sub-material-collapseable__video">
              <iframe
                width="560"
                height="315"
                src={link}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="sub-material-collapseable__section">
            <h3 className="sub-material-collapseable__subtitle">
              Deskripsi Sub Materi
            </h3>
            <p className="sub-material-collapseable__description">{desc}</p>
          </div>
          <div className="sub-material-collapseable__section">
            <h3 className="sub-material-collapseable__subtitle">
              Rekomendasi Kursus
            </h3>
            <p className="sub-material-collapseable__text">
              Online Kursus yang dapat diambil
            </p>
            <div className="sub-material-collapseable__courses">
              <div className="sub-material-collapseable__course">
                <h4 className="sub-material-collapseable__course-title">
                  W3School
                </h4>
                <a
                  className="sub-material-collapseable__course-link"
                  href="https://www.w3schools.com/"
                >
                  Ambil kursus
                </a>
              </div>
              <div className="sub-material-collapseable__course">
                <h4 className="sub-material-collapseable__course-title">
                  Dicoding
                </h4>
                <a
                  className="sub-material-collapseable__course-link"
                  href="https://www.dicoding.com/"
                >
                  Ambil kursus
                </a>
              </div>
            </div>
          </div>
          <div className="sub-material-collapseable__section">
            <h3 className="sub-material-collapseable__subtitle">Ujian</h3>
            <p className="sub-material-collapseable__text">
              Pastikan kamu sudah menguasai materi ini dengan mengikuti ujian.{" "}
              <b>Nilai minimal kelulusan adalah 80%</b>
            </p>
            <div className="sub-material-collapseable__test">
              <Link to="/test" className="sub-material-collapseable__test-link">
                Ikuti ujian
              </Link>
            </div>
          </div>
          <div className="sub-material-collapseable__section">
            <h3 className="sub-material-collapseable__subtitle">Resume</h3>
            <p className="sub-material-collapseable__text">
              Simpan materi ini ke dalam resume kamu
            </p>
            <div className="sub-material-collapseable__test">
              <Link to="/test" className="sub-material-collapseable__test-link">
                Simpan ke resume
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubMaterialCollapseable;
