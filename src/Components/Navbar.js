import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import AppName from "./AppName";
import LogoutModal from "./LogoutModal";

const Navbar = () => {
  const [isProfileMenuOpened, setIsProfileMenuOpened] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpened(!isProfileMenuOpened);
  };

  const openModal = () => {
    setIsModalOpened(true);
    setIsProfileMenuOpened(false);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  // add shadow when scroll
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("navbar--shadow", window.scrollY > 0);
  });

  return (
    <div className="navbar">
      <Link className="navbar-logo" to="/">
        <AppName />
      </Link>
      <div className="navbar-menu">
        <NavLink
          style={({ isActive }) => ({
            fontWeight: isActive ? "600" : "normal",
          })}
          className="navbar-item"
          to="/"
          end
        >
          Beranda
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            fontWeight: isActive ? "600" : "normal",
          })}
          className="navbar-item"
          to="/your-learning"
        >
          Belajar
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            fontWeight: isActive ? "600" : "normal",
          })}
          className="navbar-item)"
          to="/categories"
        >
          Kategori
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            fontWeight: isActive ? "600" : "normal",
          })}
          className="navbar-item)"
          to="/group-discussion/1"
        >
          Grup Diskusi
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            fontWeight: isActive ? "600" : "normal",
          })}
          className="navbar-item)"
          to="/recommendation"
        >
          Rekomendasi
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            fontWeight: isActive ? "600" : "normal",
          })}
          className="navbar-item)"
          to="/news"
        >
          Berita
        </NavLink>
        <button className="navbar-item" onClick={toggleProfileMenu}>
          <FaUserCircle size={32} />
        </button>

        {isProfileMenuOpened && (
          <div className="navbar-item__profile-menu">
            <NavLink
              style={({ isActive }) => ({
                fontWeight: isActive ? "600" : "normal",
              })}
              className="navbar-item__profile-item"
              to="/profile"
              onClick={toggleProfileMenu}
            >
              Profil & Capaian Belajar
            </NavLink>
            <button className="navbar-item__profile-item" onClick={openModal}>
              Logout
            </button>
          </div>
        )}
      </div>
      {isModalOpened && <LogoutModal closeModal={closeModal} />}
    </div>
  );
};

export default Navbar;
