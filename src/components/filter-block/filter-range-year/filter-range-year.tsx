import React from 'react';
import './filter-range-year.scss';
import FilterUnit from '@components/filter-block/filter-unit/filter-unit';
import Range from '@components/Range/Range';

const FilterRangeYear = () => {
  const params = {
    leftPos: 1940,
    rightPos: 2020,
    step: 10,
  };
  return (
    <FilterUnit title="Год приобретения">
      <Range params={params} />
    </FilterUnit>
  );
};

export default FilterRangeYear;
