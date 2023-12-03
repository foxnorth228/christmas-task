import React, { useCallback } from 'react';
import './style.scss';
import { useTreeChangeValue } from '@src/store/slices/treeSlice/hooks';
import config from '@components/Selectors/SelectorGarland/config';

const SelectorGarland = () => {
  const [tree, changeTree] = useTreeChangeValue();
  const { garlands } = config;

  const onClickLight = useCallback(
    (i: number) => {
      changeTree({
        section: 'garland',
        value: i + 1,
      });
      if (tree.garlandMode === 0) {
        changeTree({
          section: 'garlandMode',
          value: 1,
        });
      }
    },
    [changeTree, tree.garlandMode]
  );

  const onClickModeSwitcher = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      changeTree({
        section: 'garlandMode',
        value: Number(e.target.value),
      });
    },
    [changeTree]
  );
  return (
    <div className="selectorGarland">
      <h2 className="treePage__title selectorGarland__title">Гирлянда</h2>
      <div className="selectorGarland__elements">
        {garlands.map((el, i) => (
          <div
            style={{ borderColor: tree.garland === i + 1 ? '#7a7a7a' : '' }}
            onClick={() => onClickLight(i)}
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
              name={`garland-mode-${i}`}
              value={i}
              checked={i === tree.garlandMode}
              onChange={(e) => onClickModeSwitcher(e)}
              type="radio"
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
