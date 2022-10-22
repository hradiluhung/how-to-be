import React from "react";
import { FiSearch } from "react-icons/fi";
import { Outlet } from "react-router-dom";
import DiscussionGroupListItem from "../Components/DiscussionGroupListItem";

const GroupDiscussionPage = () => {
  return (
    <div className="discussion-page">
      <div className="discussion-page__header">
        <h1 className="discussion-page__title">Grup Diskusi</h1>
        <p className="discussion-page__description">
          Diskusi bersama teman-temanmu
        </p>
      </div>
      <div className="discussion-page__content">
        <div className="discussion-page__content_sidebar">
          <h2 className="discussion-page__content_sidebar_title">
            Pilih Forum
          </h2>
          <div className="discussion-page__content_sidebar_searchbar">
            <input
              type="text"
              className="discussion-page__content_sidebar_searchbar_input"
              placeholder="Cari forum"
            />
            <button className="discussion-page__content_sidebar_searchbar_button">
              <FiSearch />
            </button>
          </div>

          <div className="discussion-page__content_sidebar_group-list">
            <DiscussionGroupListItem id={1} name="Front-End Development" />
            <DiscussionGroupListItem id={2} name="Back-End Development" />
            <DiscussionGroupListItem id={3} name="Adobe Illustrator" />
            <DiscussionGroupListItem id={4} name="Belajar Gitar" />
            <DiscussionGroupListItem id={5} name="Menggambar" />
          </div>
        </div>
        <div className="discussion-page__content_main">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default GroupDiscussionPage;
