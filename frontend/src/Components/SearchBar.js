import React from 'react';
import './SearchBar.css';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="🔍 Search user by name..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
