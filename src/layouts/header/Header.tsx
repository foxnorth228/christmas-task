import React from 'react';
import './Header.scss';
import Nav from '@components/nav/nav';
import Counter from '@src/components/counter/counter';
import ToySearcher from '@src/components/Searcher/Searcher';

function Header() {
  return (
    <header className="header">
      <Nav />
      <ToySearcher />
      <Counter />
    </header>
  );
}

export default Header;
