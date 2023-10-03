import React from 'react';
import './menu-toy-page.scss';
import FilterPageInteractions from '@components/filter-page-interactions/filter-page-interactions';
import Searcher from '@components/searcher/searcher';
import CustomSelect from '@components/custom-select/custom-select';
import FilterBlock from '@components/filter-block/filter-block';
import FilterResetBlock from '@components/filter-reset-block/filter-reset-block';

const MenuToyPage = () => {
  return (
    <div className="menuToyPage">
      <div className="menuToyPage__tools_row">
        <FilterPageInteractions />
        <Searcher />
      </div>
      <CustomSelect />
      <FilterBlock />
      <FilterResetBlock />
    </div>
  );
};

export default MenuToyPage;
