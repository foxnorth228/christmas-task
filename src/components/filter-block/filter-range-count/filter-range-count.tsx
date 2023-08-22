import React from 'react';
import './filter-range-count.scss';
import FilterUnit from '@components/filter-block/filter-unit/filter-unit';
import Range from '@components/range/range';

const FilterRangeCount = () => {
  const params = {
    leftPos: 1,
    rightPos: 12,
    step: 1,
  };
  return (
    <FilterUnit title="Количество экземпляров">
      <Range params={params} />
    </FilterUnit>
  );
};

export default FilterRangeCount;
