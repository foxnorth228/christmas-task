import React, { useEffect, useState } from 'react';
import './right-menu-tree-page.scss';
import SelectorToys from '@components/selectors/selector-toys/selector-toys';
import SelectorDecoratedTree from '@components/selectors/selector-decorated-tree/selector-decorated-tree';
import SelectorGarland from '@components/selectors/selector-garland/selector-garland';
import SelectorPresents from '@components/selectors/SelectorPresents';
import SelectorCandles from '@components/selectors/SelectorCandles';

const RightMenuTreePage = () => {
  const query = 'screen and (max-width: 991px)';
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (matches !== media.matches) {
      setMatches(media.matches);
    }

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);
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
