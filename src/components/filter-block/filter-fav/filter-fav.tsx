import React from 'react';
import './filter-fav';

const FilterFav = () => {
  return (
    <div className="filterFav">
      <label className="filterFav__title">
        <input type="checkbox" />
        Только любимые
      </label>
    </div>
  );
};

export default FilterFav;
