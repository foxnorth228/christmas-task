import React from 'react';
import './Header.scss';
import { ChangePageFunc } from '../index';
import Nav from '../components/nav/nav';
import ToyCounter from '../components/toyCounter/toyCounter';
import ToySearcher from '../components/toySearcher/toySearcher';

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
