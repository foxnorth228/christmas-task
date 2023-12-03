import React from 'react';
import './right-menu-tree-page.scss';
import SelectorToys from '@components/Selectors/SelectorToy';
import SelectorDecoratedTree from '@components/Selectors/SelectorDecoratedTree';
import SelectorGarland from '@components/Selectors/SelectorGarland';
import SelectorPresents from '@components/Selectors/SelectorPresent';
import SelectorCandles from '@components/Selectors/SelectorCandle';
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
