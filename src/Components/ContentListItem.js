import React from "react";
import { Link } from "react-router-dom";

const ContentListItem = ({ title, image, content = "news" }) => {
  return (
    <div className="news-item">
      <div className="news-item__card">
        <div>
          <div className="news-item__image">
            <img src={image} alt={image} />
          </div>
          <div className="news-item__title">{title}</div>
        </div>
        <div className="news-item__footer">
          <Link
            className="news-item__button"
            to={content === "news" ? "/news/1" : "/recommendation/1"}
          >
            Selengkapnya
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContentListItem;
