import React from "react";

const UnfollowMaterialModal = ({ closeModal, onUnfollow }) => {
  return (
    <div className="unfollow-modal">
      <div className="unfollow-modal__content">
        <h1 className="unfollow-modal__title">
          Apakah yakin ingin berhenti mengikuti kelas ini?
        </h1>
        <p className="unfollow-modal__alert">
          Semua proses pembelajaran akan terhapus!
        </p>
        <div className="unfollow-modal__button-group">
          <button
            className="unfollow-modal__button unfollow-modal__button--cancel"
            onClick={closeModal}
          >
            Batal
          </button>
          <div
            to="/"
            className="unfollow-modal__button unfollow-modal__button--confirm"
            onClick={onUnfollow}
          >
            Hapus
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnfollowMaterialModal;
