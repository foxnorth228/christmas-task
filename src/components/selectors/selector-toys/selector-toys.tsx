import React from 'react';
import './selector-toys.scss';
import useToys from '@hooks/use-toys';
import useActiveToy from '@hooks/use-active-toy';

const SelectorToys = () => {
  const fileNames = [];
  const [activeToy, setActiveToy] = useActiveToy();
  const [toys] = useToys();
  for (let i = 0; i < 20; ++i) {
    fileNames.push({
      num: i + 1,
      count: toys[i].count,
      countFreeToys: toys[i].countFreeToys,
    });
  }
  const selectedToys = toys.filter((el) => el.selected);
  const array = selectedToys.length === 0 ? fileNames : selectedToys;
  return (
    <div className="selectorToys">
      <h2 className="selectorToys__title">Игрушки</h2>
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
          >
            <div
              style={{ backgroundImage: `url('./toys/${el.num}.png')` }}
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
