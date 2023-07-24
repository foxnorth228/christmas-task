import React from 'react';
import './selector-garland.scss';
import useTree from '@hooks/use-tree';

const SelectorGarland = () => {
  const [tree, treeReducer] = useTree();
  const garlands = ['multicolor', 'red', 'blue', 'yellow', 'green'];
  return (
    <div className="selectorGarland">
      <h2 className="selectorGarland__title">Гирлянда</h2>
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
            }}
            key={i}
            className={`selectorGarland__element selectorGarland__element_${el}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SelectorGarland;
