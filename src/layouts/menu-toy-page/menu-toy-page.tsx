import React from 'react';
import './menu-toy-page.scss';
import FilterPageInteractions from '@components/Interactions';
import Searcher from '@components/searcher/searcher';
import CustomSelect from '@components/CustomSelect';
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
