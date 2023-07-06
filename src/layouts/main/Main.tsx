import React from 'react';
import './main.scss';
import { filterSections, filterPositions } from '@services/filterTypes';
import { Outlet } from 'react-router';

function Main() {
  return (
    <>
      <main className="mainBody">{<Outlet />}</main>
    </>
  );
}

export type updatedReducer = (section: filterSections, position: filterPositions) => void;
export default Main;
