import React, { useRef } from 'react';
import './filter-range-year.scss';
import FilterUnit from '@components/filter-block/filter-unit/filter-unit';
import Range from '@components/range/range';
import { useFilter } from '@src/store/slices/filterSlice/hooks';

const FilterRangeYear = () => {
  const filter = useFilter();
  const params = useRef({
    leftPos: 1940,
    rightPos: 2020,
    step: filter.rangeYear.step,
  });
  return (
    <FilterUnit title="Год приобретения">
      <Range name={'rangeYear'} params={params.current} />
    </FilterUnit>
  );
};

export default FilterRangeYear;
