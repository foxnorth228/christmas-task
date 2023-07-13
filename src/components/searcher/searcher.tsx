import React from 'react';
import './searcher.scss';

function Searcher() {
  return (
    <div className="searcher">
      <input type="text" placeholder="Поиск..." className="searcher__input" />
      <div className="searcher__icon"></div>
    </div>
  );
}

export default Searcher;
