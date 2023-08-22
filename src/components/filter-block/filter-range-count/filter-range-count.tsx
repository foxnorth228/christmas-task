import React, { useRef } from 'react';
import './filter-range-count.scss';
import FilterUnit from '@components/filter-block/filter-unit/filter-unit';
import Range from '@components/range/range';
import useFilter from '@hooks/use-filter';

const FilterRangeCount = () => {
  const [filter] = useFilter();
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
