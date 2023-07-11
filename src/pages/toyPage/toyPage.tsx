import React from 'react';
import './toyPage.css';
import { CardList } from '@components/cardList/CardList';
import FilterBlock from '../../components/filter-block/filter-block';

function ToyPage() {
  return (
    <div className="page toyPage">
      <FilterBlock />
      {/* <CardList /> */}
    </div>
  );
}

export default ToyPage;
