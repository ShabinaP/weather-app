import React from "react";
import PropTypes from "prop-types";
import "../styles/searchForm.css";

const SearchForm = ({ searchText, setSearchText, onSubmit }) => {
  const handleInputChange = (event) => setSearchText(event.target.value);
  const handleSearch = (event) => {
    event.preventDefault();
    onSubmit();
  };
  return (
    <div className="search-form">
      <form>
        <input
          type="text"
          placeholder="Search city..."
          name="search"
          value={searchText}
          onSubmit={handleSearch}
          onChange={handleInputChange}
        />
        <button className="searchButton" type="submit" onClick={handleSearch}>
          SEARCH
        </button>
      </form>
    </div>
  );
};
SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default SearchForm;
