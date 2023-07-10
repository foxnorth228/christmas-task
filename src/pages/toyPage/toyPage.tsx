import React from 'react';
import './toyPage.css';
import { CardList } from '@components/cardList/CardList';
import FilterBlocks from '../../components/FiltersBlocks/FilterBlocks';

function ToyPage() {
  return (
    <div className="page toyPage">
      <FilterBlocks />
      {/* <CardList /> */}
    </div>
  );
}

export default ToyPage;
