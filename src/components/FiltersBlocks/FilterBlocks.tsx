import React from 'react';
import './FilterBlocks.scss';
import FilterBlockValue from './FilterBlockValue/FilterBlockValue';
import ToyFilterRange from './FilterBlockRange/ToyFilterRange';
import ToyFilterSort from './FIlterBlockOther/toyFilterSort';
import useFilter from '@src/hooks/useFilter';

function FilterBlocks() {
  const [filter, filterReducer] = useFilter();
  return (
    <div className="filterBlocks">
      <FilterBlockValue />
      <ToyFilterRange filter={filter} changeToyFilter={filterReducer} />
      <ToyFilterSort filter={filter} changeToyFilter={filterReducer} />
    </div>
  );
}

export default FilterBlocks;
