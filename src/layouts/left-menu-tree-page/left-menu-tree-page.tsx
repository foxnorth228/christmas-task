import React from 'react';
import './left-menu-tree-page.scss';
import FilterPageInteractions from '@components/Interactions';
import SelectorTree from '@components/selectors/selector-tree/selector-tree';
import SelectorBg from '@components/selectors/selector-bg/selector-bg';
import LinkToyPage from '@components/LinkToyPage';
import TreeResetBlock from 'src/components/ResetTreeBlock';
import SelectorGarland from '@components/selectors/selector-garland/selector-garland';
import SelectorDecoratedTree from '@components/selectors/selector-decorated-tree/selector-decorated-tree';
import SelectorStar from '@components/selectors/SelectorStar';
import useMatchMedia from '@hooks/useMatchMedia';

const LeftMenuTreePage = () => {
  const matches = useMatchMedia('screen and (max-width: 991px)');
  return (
    <>
      {matches && (
        <>
          <input id="menu__toggle" type="checkbox" className="menu__toggle"></input>
          <label htmlFor="menu__toggle" className="menu__btn">
            <span></span>
          </label>
        </>
      )}
      <div className="leftMenuTreePage__menu">
        <div className="leftMenuTreePage">
          <div className="leftMenuTreePage__interacts">
            <LinkToyPage />
            <FilterPageInteractions />
          </div>
          <TreeResetBlock />
          <SelectorTree />
          <SelectorBg />
          <SelectorStar />
          {matches && (
            <>
              <SelectorGarland />
              <SelectorDecoratedTree />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default LeftMenuTreePage;
