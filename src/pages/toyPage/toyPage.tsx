import React from 'react';
import './toyPage.css';
import '../page.scss';
import { CardList } from '@components/cardList/CardList';
import { IFilter } from '@components/cardList/filterTypes';
import ToyFilters from '../../components/toyFilters/toyFilters';
import { updatedReducer } from '@layouts/main/Main';

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
