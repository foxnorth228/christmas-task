import React, { useReducer, Dispatch } from 'react';
import './main.css';
import {
  IFilter,
  IChangeFilter,
  filterPosOrUndefined,
  FilterCreation,
  filterSections,
  filterPositions,
  createIChangeFilter,
} from '@components/cardList/filterTypes';
import StartPage from '../../pages/startPage/startPage';
import ToyPage from '../../pages/toyPage/toyPage';
import TreePage from '../../pages/treePage/treePage';

interface PageHook {
  page: number;
  changePage: Dispatch<React.SetStateAction<number>>;
}

function Main({ page, changePage }: PageHook) {
  const [filter, setFilter] = useReducer(filterReducer, FilterCreation());
  function updatedReducer(section: filterSections, position: filterPositions) {
    setFilter(createIChangeFilter(section, position));
  }

  const pages = [
    <StartPage key="0" changePage={changePage} />,
    <ToyPage key="1" filter={filter} changeToyFilter={updatedReducer} />,
    <TreePage key="2" />,
  ];

  return (
    <>
      <main className="mainBody">{pages[page]}</main>
    </>
  );
}

export type updatedReducer = (section: filterSections, position: filterPositions) => void;
export default Main;

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
