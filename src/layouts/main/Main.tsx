import React, { useReducer, Dispatch, useCallback, useContext } from 'react';
import './main.scss';
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
  const pages = [
    <StartPage key="0" changePage={changePage} />,
    <ToyPage key="1" />,
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
