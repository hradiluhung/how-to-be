import React from "react";
import { FaBook, FaCheckCircle, FaMedal } from "react-icons/fa";

const AchievementItem = ({ name, sum }) => {
  return (
    <div className="achievement-item">
      <div className="achievement-item__icon">
        {name === "diambil" ? (
          <FaBook size={24} />
        ) : name === "selesai" ? (
          <FaCheckCircle size={24} />
        ) : (
          <FaMedal size={24} />
        )}
      </div>
      <div className="achievement-item__sum">{sum}</div>
      <div className="achievement-item__name">
        {name === "diambil" ? (
          <span>Kelas yang sedang diambil</span>
        ) : name === "selesai" ? (
          <span>Kelas yang telah selesai</span>
        ) : (
          <span>Total Pencapaian</span>
        )}
      </div>
    </div>
  );
};

export default AchievementItem;
