import React from 'react';
import './toyPage.css';
import '../page.scss';
import { CardList } from './cardList/CardList';
import { IFilter } from '../../main/filterTypes';
import ToyFilters from './toyFilters/toyFilters';
import { updatedReducer } from '../Main';

export interface IChangeToyFilter {
  filter: IFilter;
  changeToyFilter: updatedReducer;
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
