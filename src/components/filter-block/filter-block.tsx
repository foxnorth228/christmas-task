import React from 'react';
import './filter-block.scss';
import FilterShape from './filter-shape/filter-shape';
import FilterColor from './filter-color/filter-color';
import FilterSize from './filter-size/filter-size';
import FilterRangeCount from '@components/filter-block/filter-range-count/filter-range-count';
import FilterRangeYear from '@components/filter-block/filter-range-year/filter-range-year';

function FilterBlock() {
  return (
    <div className="filterBlock">
      <FilterShape />
      <FilterColor />
      <FilterSize />
      <FilterRangeCount />
      <FilterRangeYear />
    </div>
  );
}

export default FilterBlock;
