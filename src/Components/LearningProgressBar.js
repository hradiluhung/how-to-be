import React from "react";
import { Link } from "react-router-dom";

const LearningProgressBar = ({ image, title, percentage }) => {
  const percentageStyle = {
    width: `${percentage}%`,
  };

  return (
    <Link to="/learning/1" className="learning-progress">
      <div className="learning-progress__image">
        <img src={image} alt={image} />
      </div>
      <div className="learning-progress__detail">
        <h3 className="learning-progress__title">{title}</h3>
        <div className="learning-progress__bar">
          <div
            className="learning-progress__percentage"
            style={percentageStyle}
          ></div>
        </div>
        <div className="learning-progress__number">
          <span>{percentage}%</span>
        </div>
      </div>
    </Link>
  );
};

export default LearningProgressBar;
