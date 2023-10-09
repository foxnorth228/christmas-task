import React, { useEffect, useState } from 'react';
import './left-menu-tree-page.scss';
import FilterPageInteractions from '@components/filter-page-interactions/filter-page-interactions';
import SelectorTree from '@components/selectors/selector-tree/selector-tree';
import SelectorBg from '@components/selectors/selector-bg/selector-bg';
import LinkToyPage from '@components/link-toy-page/link-toy-page';
import TreeResetBlock from '@components/tree-reset-block';
import SelectorGarland from '@components/selectors/selector-garland/selector-garland';
import SelectorDecoratedTree from '@components/selectors/selector-decorated-tree/selector-decorated-tree';

const LeftMenuTreePage = () => {
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
          <SelectorTree />
          <SelectorBg />
          {matches && (
            <>
              <SelectorGarland />
              <SelectorDecoratedTree />
            </>
          )}
          <TreeResetBlock />
        </div>
      </div>
    </>
  );
};

export default LeftMenuTreePage;
