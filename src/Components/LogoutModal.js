import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LogoutModal = ({ closeModal }) => {
  const navigate = useNavigate();

  const onLogoutHandler = () => {
    closeModal();
    localStorage.removeItem("user");
    window.location.reload();
    navigate("/");
  };

  return (
    <div className="logout-modal">
      <div className="logout-modal__content">
        <h1 className="logout-modal__title">Apakah yakin ingin logout?</h1>
        <div className="logout-modal__button-group">
          <button
            className="logout-modal__button logout-modal__button--cancel"
            onClick={closeModal}
          >
            Batal
          </button>
          <Link
            to="/"
            className="logout-modal__button logout-modal__button--confirm"
            onClick={onLogoutHandler}
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
