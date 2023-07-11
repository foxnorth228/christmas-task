import React from 'react';
import './filter-block.scss';
import ToyFilterRange from './FilterBlockRange/ToyFilterRange';
import ToyFilterSort from './FIlterBlockOther/toyFilterSort';
import FilterShape from './filter-shape/filter-shape';
import FilterColor from './filter-color/filter-color';
import FilterSize from './filter-size/filter-size';

function FilterBlock() {
  return (
    <div className="filterBlock">
      <FilterShape />
      <FilterColor />
      <FilterSize />
      {/*<ToyFilterRange />*/}
      {/*<ToyFilterSort />*/}
    </div>
  );
}

export default FilterBlock;
