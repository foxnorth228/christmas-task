import React from 'react';
import './toyPage.css';
import { CardList } from '@components/cardList/CardList';
import FilterBlock from '@components/filter-block/filter-block';
import FilterResetBlock from '@components/filter-reset-block/filter-reset-block';
import Searcher from '@components/searcher/searcher';
import FilterPageInteractions from '@components/filter-page-interactions/filter-page-interactions';
import CustomSelect from '@components/custom-select/custom-select';
import LinkTreePage from '@components/linkTreePage/linkTreePage';

function ToyPage() {
  return (
    <div className="page toyPage">
      <div className="toyPage__menu">
        <div className="toyPage__tools">
          <div className="toyPage__tools_row">
            <FilterPageInteractions />
            <Searcher />
          </div>
          <CustomSelect />
        </div>
        <FilterBlock />
        <FilterResetBlock />
      </div>
      <CardList headerLink={<LinkTreePage />} />
    </div>
  );
}

export default ToyPage;
