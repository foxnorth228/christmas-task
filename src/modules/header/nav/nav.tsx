import React from 'react';
import './nav.scss';
import { ChangePageFunc } from '../../..';
import StartPageSelector from './startPageSelector/startPageSelector';
import ToyPageSelector from './toyPageSelector/toyPageSelector';
import TreePageSelector from './treePageSelector/treePageSelector';

function Nav({ changePage }: ChangePageFunc) {
  return (
    <>
      <nav className="pageNav">
        <StartPageSelector changePage={changePage} />
        <ToyPageSelector changePage={changePage} />
        <TreePageSelector changePage={changePage} />
      </nav>
    </>
  );
}

export default Nav;
