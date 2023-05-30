import React from 'react';
import './Header.scss';
import { ChangePageFunc } from '@src/index';
import Nav from '@components/nav/nav';
import Counter from '@src/components/counter/counter';
import ToySearcher from '@components/toySearcher/toySearcher';

function Header({ changePage }: ChangePageFunc) {
  return (
    <header className="header">
      <Nav changePage={changePage} />
      <ToySearcher />
      <Counter />
    </header>
  );
}

export default Header;
