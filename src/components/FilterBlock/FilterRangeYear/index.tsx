import React, { useRef } from 'react';
import './style.scss';
import FilterUnit from '@components/FilterBlock/FilterUnit';
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
