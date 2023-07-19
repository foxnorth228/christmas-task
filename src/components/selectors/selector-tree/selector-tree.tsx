import React from 'react';
import './selector-tree.scss';

const SelectorTree = () => {
  const fileNames = ['1', '2', '3', '4', '5', '6'];
  return (
    <div className="selectorTree">
      <h2 className="selectorTree__title">Выберите ёлочку</h2>
      <div className="selectorTree__elements">
        {fileNames.map((el, i) => (
          <div key={i} className="selectorTree__element">
            <div
              style={{ backgroundImage: `url("./tree/${el}.png")` }}
              className="selectorTree__example"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectorTree;
