import React, { useReducer, Dispatch } from 'react';
import './main.css';

import { IFilter, IChangeFilter, filterPos, FilterCreation } from './filterTypes';
import StartPage from './startPage/startPage';
import ToyPage from './toyPage/toyPage';
import TreePage from './treePage/treePage';

interface PageHook {
  page: number;
  changePage: Dispatch<React.SetStateAction<number>>;
}

function Main({ page, changePage }: PageHook) {
  const [filter, setFilter] = useReducer(filterReducer, FilterCreation());

  const pages = [
    <StartPage key="0" changePage={changePage} />,
    <ToyPage key="1" filter={filter} changeToyFilter={setFilter} />,
    <TreePage key="2" />,
  ];

  return (
    <>
      <main className="mainBody">{pages[page]}</main>
    </>
  );
}

export default Main;

function filterReducer(filter: IFilter, changedPos: IChangeFilter) {
  let filterSection = filter[changedPos.type];
  const currentValue: filterPos = Object.entries(filterSection).find(
    (el) => el[0] === changedPos.elem
  );
  if (currentValue) {
    filterSection = {
      ...filterSection,
      [changedPos.elem]: !currentValue[1],
    };
  }
  return {
    ...filter,
    [changedPos.type]: filterSection,
  };
}
