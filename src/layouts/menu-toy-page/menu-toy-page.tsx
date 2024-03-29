import React from 'react';
import './menu-toy-page.scss';
import FilterPageInteractions from '@components/Interactions';
import Searcher from '@components/Searcher';
import CustomSelect from '@components/CustomSelect';
import FilterBlock from '@components/FilterBlock';
import ResetFilterBlock from '@components/ResetFilterBlock';

const MenuToyPage = () => {
  return (
    <div className="menuToyPage">
      <div className="menuToyPage__tools_row">
        <FilterPageInteractions />
        <Searcher />
      </div>
      <CustomSelect />
      <FilterBlock />
      <ResetFilterBlock />
    </div>
  );
};

export default MenuToyPage;
