import React from 'react';
import './selector-toys.scss';

import useActiveToy from '@hooks/useActiveToy';
import usePageLoaded from '@hooks/usePageLoaded';
import { useToys } from '@src/store/slices/toysSlice/hooks';

const SelectorToys = () => {
  const isPageLoaded = usePageLoaded();
  const fileNames = [];
  const [, setActiveToy] = useActiveToy();
  const newToys = [...useToys()];
  const sortedToys = newToys.sort((a, b) => a.num - b.num);
  for (let i = 0; i < 20; ++i) {
    fileNames.push({
      num: i + 1,
      count: sortedToys[i].count,
      countFreeToys: sortedToys[i].countFreeToys,
    });
  }
  const selectedToys = newToys.filter((el) => el.selected);
  const array = selectedToys.length === 0 ? fileNames : selectedToys;
  return (
    <div className="selectorToys">
      <h2 className="treePage__title selectorToys__title">Игрушки</h2>
      <div className="selectorToys__elements">
        {array.map((el) => (
          <div
            onMouseDown={(e) => {
              if (el.countFreeToys === 0) {
                return;
              }
              setActiveToy({ x: e.pageX, y: e.pageY, type: el.num });
            }}
            key={el.num}
            className="selectorToys__element"
            onTouchStart={(e) => {
              if (el.countFreeToys === 0) {
                return;
              }
              setActiveToy({ x: e.touches[0].pageX, y: e.touches[0].pageY, type: el.num });
            }}
          >
            <div
              style={{
                display: isPageLoaded ? '' : 'none',
                backgroundImage: `url('./toys/${el.num}.webp')`,
              }}
              className="selectorToys__example"
            ></div>
            <span className="selectorToys__counter">{el.countFreeToys}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectorToys;
