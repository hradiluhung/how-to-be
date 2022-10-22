import React from "react";
import { NavLink } from "react-router-dom";

const DiscussionGroupListItem = ({ id, name }) => {
  return (
    <NavLink
      to={`/group-discussion/${id}`}
      className={({ isActive }) => {
        return isActive
          ? "group-list-item group-list-item--active"
          : "group-list-item";
      }}
    >
      <div className="group-list-item__image">
        <img src="https://picsum.photos/200" alt="group" />
      </div>
      <div className="group-list-item__info">
        <h3 className="group-list-item__info_name">{name}</h3>
      </div>
    </NavLink>
  );
};

export default DiscussionGroupListItem;
