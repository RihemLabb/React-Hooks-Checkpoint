import React from 'react';

const Filter = ({ handleFilterChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => handleFilterChange(e.target.value)}
      />
    </div>
  );
};

export default Filter;
