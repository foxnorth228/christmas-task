import React from 'react';
import './header.scss';
import { ChangePageFunc } from '../../index';
import Nav from './nav/nav';
import ToyCounter from './toyCounter/toyCounter';
import ToySearcher from './toySearcher/toySearcher';

function Header({ changePage }: ChangePageFunc) {
  return (
    <header className="header">
      <Nav changePage={changePage} />
      <ToySearcher />
      <ToyCounter />
    </header>
  );
}

export default Header;
