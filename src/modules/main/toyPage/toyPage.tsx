import React, { Dispatch } from 'react';
import './toyPage.css';
import '../page.scss';
import { CardList } from './cardList/createToyCards';
import { IChangeFilter, IFilter } from '../../main/filterTypes';
import ToyFilters from './toyFilters/toyFilters';

export interface IChangeToyFilter {
  filter: IFilter;
  changeToyFilter: Dispatch<IChangeFilter>;
}

function ToyPage({ filter, changeToyFilter }: IChangeToyFilter) {
  return (
    <div className="page toyPage">
      <ToyFilters filter={filter} changeToyFilter={changeToyFilter} />
      <CardList filter={filter} />
    </div>
  );
}

export default ToyPage;
