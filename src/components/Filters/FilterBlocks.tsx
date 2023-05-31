import React from 'react';
import './FilterBlocks.scss';
import FilterBlockValue from './toyFilterValue/FilterBlockValue';
import ToyFilterRange from './toyFilterRange/ToyFilterRange';
import ToyFilterSort from './toyFIlterOther/toyFilterSort';
import { IChangeToyFilter } from '../../pages/toyPage/toyPage';
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
