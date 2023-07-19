import React from 'react';
import './selector-decorated-tree.scss';

const SelectorDecoratedTree = () => {
  const fileNames = ['1', '2', '3', '4'];
  return (
    <div className="selectorDecTree">
      <h2 className="selectorDecTree__title">Вы нарядили</h2>
      <div className="selectorDecTree__slider">
        <div className="selectorDecTree__elements">
          {fileNames.map((el, i) => (
            <div key={i} className="selectorDecTree__element">
              <div
                style={{ backgroundImage: `url('./tree/${el}.png')` }}
                className="selectorDecTree__example"
              ></div>
            </div>
          ))}
        </div>
        <div className="selectorDecTree__arrow selectorDecTree__arrow_left"></div>
        <div className="selectorDecTree__arrow selectorDecTree__arrow_right"></div>
      </div>
    </div>
  );
};

export default SelectorDecoratedTree;
