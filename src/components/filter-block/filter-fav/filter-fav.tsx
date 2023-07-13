import React from 'react';
import './filter-fav.scss';

const FilterFav = () => {
  return (
    <div className="filterFav">
      <label className="filterFav__title">
        Только любимые
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default FilterFav;
