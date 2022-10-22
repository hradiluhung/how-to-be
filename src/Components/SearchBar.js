import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ onSearch, placeholder, buttonType }) => {
  return (
    <form className="search-bar" onSubmit={onSearch}>
      <input
        className="search-bar__input"
        type="text"
        placeholder={placeholder}
      />
      <button className="search-bar__button">
        {buttonType === "icon" ? <FiSearch size={24} /> : <span>Cari</span>}
      </button>
    </form>
  );
};

export default SearchBar;
