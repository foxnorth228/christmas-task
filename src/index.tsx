import React, { useState, Dispatch, useReducer } from 'react';
import { createRoot } from 'react-dom/client';

import './index.scss';
import Header from '@layouts/header/Header';
import Main from '@layouts/main/Main';
import Footer from '@layouts/footer/Footer';
import { getData } from './getData';
import {
  FilterCreation,
  IChangeFilter,
  IFilter,
  createIChangeFilter,
  filterPosOrUndefined,
  filterPositions,
  filterSections,
} from './components/cardList/filterTypes';
import FilterContext from './contexts/FilterContext';

export const data: toy[] = getData();

export type toy = {
  num: number;
  name: string;
  count: number;
  year: number;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
};

export interface ChangePageFunc {
  changePage: Dispatch<React.SetStateAction<number>>;
}

function App() {
  const [filter, setFilter] = useReducer(filterReducer, FilterCreation());
  function updatedReducer(section: filterSections, position: filterPositions) {
    setFilter(createIChangeFilter(section, position));
  }
  const [page, setPage] = useState(0);
  return (
    <FilterContext.Provider value={{ filter, filterReducer: updatedReducer }}>
      <Header changePage={setPage} />
      <Main page={page} changePage={setPage} />
      <Footer />
    </FilterContext.Provider>
  );
}

const elRoot = document.getElementById('root');
if (elRoot) {
  const root = createRoot(elRoot);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  throw new Error("Element with id root doesn't exist");
}

function filterReducer(filter: IFilter, { section, position }: IChangeFilter) {
  let filterSection = filter[section];
  const currentValue: filterPosOrUndefined = Object.entries(filterSection).find(
    (el) => el[0] === position
  );
  if (currentValue !== undefined) {
    filterSection = {
      ...filterSection,
      [position]: !currentValue[1],
    };
  }
  return {
    ...filter,
    [section]: filterSection,
  };
}
