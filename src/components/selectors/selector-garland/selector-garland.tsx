import React from 'react';
import './selector-garland.scss';
import useTree from '@hooks/use-tree';

const SelectorGarland = () => {
  const [tree, treeReducer] = useTree();
  const garlands = ['multicolor', 'red', 'blue', 'yellow', 'green'];
  return (
    <div className="selectorGarland">
      <h2 className="treePage__title selectorGarland__title">Гирлянда</h2>
      <div className="selectorGarland__elements">
        {garlands.map((el, i) => (
          <div
            style={{ borderColor: tree.garland === i + 1 ? '#7a7a7a' : '' }}
            onClick={() => {
              treeReducer({
                type: 'CHANGE_VALUE',
                payload: {
                  section: 'garland',
                  value: i + 1,
                },
              });
              if (tree.garlandMode === 0) {
                treeReducer({
                  type: 'CHANGE_VALUE',
                  payload: {
                    section: 'garlandMode',
                    value: 1,
                  },
                });
              }
            }}
            key={i}
            className={`selectorGarland__element selectorGarland__element_${el}`}
          ></div>
        ))}
      </div>
      <div className="seletorGarland__modeSwitcher">
        {new Array(6).fill(0).map((_, i) => (
          <div key={i}>
            <input
              id={`garland-mode-${i}`}
              value={i}
              checked={i === tree.garlandMode}
              onChange={(e) => {
                treeReducer({
                  type: 'CHANGE_VALUE',
                  payload: { section: 'garlandMode', value: Number(e.target.value) },
                });
              }}
              type="radio"
              name="garland-mode"
            />
            <label className="selectorGarland__modeSwitcher_element" htmlFor={`garland-mode-${i}`}>
              {i !== 0 && i}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectorGarland;
