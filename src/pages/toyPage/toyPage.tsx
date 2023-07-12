import React from 'react';
import './toyPage.css';
import { CardList } from '@components/cardList/CardList';
import FilterBlock from '@components/filter-block/filter-block';
import FilterResetBlock from '@components/filter-reset-block/filter-reset-block';
import Searcher from '@components/searcher/searcher';
import FilterPageInteractions from '@components/filter-page-interactions/filter-page-interactions';

function ToyPage() {
  return (
    <div className="page toyPage">
      <div className="toyPage__menu">
        <div className="toyPage__tools">
          <div className="toyPage__tools_row">
            <FilterPageInteractions />
            <Searcher />
          </div>
          <div className="toyPage__tools_row">
            <span>Сортировка</span>
            <select>
              <option>По названию от А до Я</option>
              <option>По названию от Я до А</option>
              <option>По количеству по возрастанию</option>
              <option>По количеству по убыванию</option>
            </select>
          </div>
        </div>
        <FilterBlock />
        <FilterResetBlock />
      </div>
      {/* <CardList /> */}
    </div>
  );
}

export default ToyPage;
