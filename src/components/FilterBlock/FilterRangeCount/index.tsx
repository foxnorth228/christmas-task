import React, { useRef } from 'react';
import './style.scss';
import FilterUnit from '@components/FilterBlock/FilterUnit';
import Range from '@components/range/range';
import { useFilter } from '@src/store/slices/filterSlice/hooks';

const FilterRangeCount = () => {
  const filter = useFilter();
  const params = useRef({
    leftPos: 1,
    rightPos: 12,
    step: filter.rangeNum.step,
  });
  return (
    <FilterUnit title="Количество экземпляров">
      <Range name={'rangeNum'} params={params.current} />
    </FilterUnit>
  );
};

export default FilterRangeCount;
