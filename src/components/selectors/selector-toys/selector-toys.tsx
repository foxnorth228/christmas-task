import React from 'react';
import './selector-toys.scss';

const SelectorToys = () => {
  const fileNames: number[] = [];
  for (let i = 0; i < 20; ++i) {
    fileNames.push(i + 1);
  }
  return (
    <div className="selectorToys">
      <h2 className="selectorToys__title">Игрушки</h2>
      <div className="selectorToys__elements">
        {fileNames.map((el) => (
          <div key={el} className="selectorToys__element">
            <div
              style={{ backgroundImage: `url('./toys/${el}.png')` }}
              className="selectorToys__example"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectorToys;
