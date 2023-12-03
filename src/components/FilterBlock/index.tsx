import React from 'react';
import FilterShape from '@components/FilterBlock/FilterShape';
import FilterColor from '@components/FilterBlock/FilterColor';
import FilterSize from '@components/FilterBlock/FilterSize';
import FilterRangeCount from '@components/FilterBlock/FilterRangeCount';
import FilterRangeYear from '@components/FilterBlock/FilterRangeYear';

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
