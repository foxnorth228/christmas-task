import React from 'react';
import './right-menu-tree-page.scss';
import SelectorToys from '@components/selectors/selector-toys/selector-toys';
import SelectorDecoratedTree from '@components/selectors/selector-decorated-tree/selector-decorated-tree';
import SelectorGarland from '@components/selectors/selector-garland/selector-garland';
import SelectorPresents from '@components/selectors/SelectorPresents';
import SelectorCandles from '@components/selectors/SelectorCandles';
import useMatchMedia from '@hooks/useMatchMedia';

const RightMenuTreePage = () => {
  const matches = useMatchMedia('screen and (max-width: 991px)');
  return (
    <>
      {matches && (
        <>
          <input id="menu__toggle2" type="checkbox" className="menu__toggle"></input>
          <label id="menu__btn2" htmlFor="menu__toggle2" className="menu__btn">
            <span></span>
          </label>
        </>
      )}
      <div className="rightMenuTreePage">
        <SelectorToys />
        <SelectorPresents />
        <SelectorCandles />
        {!matches && (
          <>
            <SelectorGarland />
            <SelectorDecoratedTree />
          </>
        )}
      </div>
    </>
  );
};

export default RightMenuTreePage;
