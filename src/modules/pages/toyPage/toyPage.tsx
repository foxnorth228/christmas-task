import React, { Dispatch } from 'react';
import './toyPage.css';
import { createCards } from './createToyCards';
import { data } from '../../../index';
import { IChangeFilter, IFilter } from '../../main/Main';
import ToyFilterValue from './toyFilter/toyFilterValue/toyFilterValue';
import ToyFilterRange from './toyFilter/toyFilterRange/ToyFilterRange';
import ToyFilterSort from './toyFilter/toyFIlterOther/toyFilterSort';

export interface IChangeToyFilter {
  filter: IFilter;
  changeToyFilter: Dispatch<IChangeFilter>;
}

function ToyPage({ filter, changeToyFilter }: IChangeToyFilter) {
  return (
    <>
      <div className="page toyPage">
        <div className="toyFilters">
          <ToyFilterValue filter={filter} changeToyFilter={changeToyFilter} />
          <ToyFilterRange filter={filter} changeToyFilter={changeToyFilter} />
          <ToyFilterSort filter={filter} changeToyFilter={changeToyFilter} />
        </div>
        <div className="cardList">{createCards(data, filter)}</div>
      </div>
    </>
  );
}

export default ToyPage;
