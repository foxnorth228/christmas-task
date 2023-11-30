import React from 'react';
import './selector-bg.scss';
import { useTreeChangeValue } from '@src/store/slices/treeSlice/hooks';
import usePageLoaded from '@hooks/usePageLoaded';

const SelectorBg = () => {
  const [tree, treeChangeValue] = useTreeChangeValue();
  const isPageLoaded = usePageLoaded();
  const filenames = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  return (
    <div className="selectorBg">
      <h2 className="treePage__title selectorBg__title">Выберите фон</h2>
      <div className="selectorBg__elements">
        {filenames.map((el, i) => (
          <div
            key={i}
            style={{
              display: isPageLoaded ? '' : 'none',
              backgroundImage: `url('./bg/${el}.webp')`,
              borderColor: tree.bg === Number(el) ? '#ff5454' : '',
            }}
            onClick={() => {
              treeChangeValue({
                section: 'bg',
                value: Number(el),
              });
            }}
            className="selectorBg__element"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SelectorBg;
