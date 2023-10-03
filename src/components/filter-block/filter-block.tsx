import React from 'react';
import FilterShape from './filter-shape/filter-shape';
import FilterColor from './filter-color/filter-color';
import FilterSize from './filter-size/filter-size';
import FilterRangeCount from '@components/filter-block/filter-range-count/filter-range-count';
import FilterRangeYear from '@components/filter-block/filter-range-year/filter-range-year';

function FilterBlock() {
  return (
    <>
      <FilterShape />
      <FilterColor />
      <FilterSize />
      <FilterRangeCount />
      <FilterRangeYear />
    </>
  );
}

export default FilterBlock;
