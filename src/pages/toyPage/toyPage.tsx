import React from 'react';
import './toyPage.css';
import '../page.scss';
import { CardList } from '@components/cardList/CardList';
import { IFilter } from '@components/cardList/filterTypes';
import ToyFilters from '../../components/toyFilters/toyFilters';
import { updatedReducer } from '@layouts/main/Main';
import useFilter from '@src/hooks/useFilter';

export interface IChangeToyFilter {
  filter: IFilter;
  changeToyFilter: updatedReducer;
}

function ToyPage() {
  const [filter, filterReducer] = useFilter();
  return (
    <div className="page toyPage">
      <ToyFilters filter={filter} changeToyFilter={filterReducer} />
      <CardList filter={filter} />
    </div>
  );
}

export default ToyPage;
