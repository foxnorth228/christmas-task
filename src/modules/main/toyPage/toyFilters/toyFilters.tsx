import React from 'react';
import './toyFilters.scss';

import ToyFilterValue from './toyFilterValue/toyFilterValue';
import ToyFilterRange from './toyFilterRange/ToyFilterRange';
import ToyFilterSort from './toyFIlterOther/toyFilterSort';
import { IChangeToyFilter } from '../toyPage';

function ToyFilters({ filter, changeToyFilter }: IChangeToyFilter) {
  return (
    <div className="toyFilters">
      <ToyFilterValue filter={filter} changeToyFilter={changeToyFilter} />
      <ToyFilterRange filter={filter} changeToyFilter={changeToyFilter} />
      <ToyFilterSort filter={filter} changeToyFilter={changeToyFilter} />
    </div>
  );
}

export default ToyFilters;
