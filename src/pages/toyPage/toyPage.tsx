import React from 'react';
import './toyPage.css';
import { CardList } from '@components/cardList/CardList';
import { IFilter } from '@services/filterTypes';
import FilterBlocks from '../../components/FiltersBlocks/FilterBlocks';
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
      <FilterBlocks />
      <CardList filter={filter} />
    </div>
  );
}

export default ToyPage;
