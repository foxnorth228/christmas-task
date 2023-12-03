import React, { useCallback } from 'react';
import './style.scss';
import { useTreeChangeValue } from '@src/store/slices/treeSlice/hooks';
import usePageLoaded from '@hooks/usePageLoaded';
import config from '@components/Selectors/SelectorBg/config';

const SelectorBg = () => {
  const [tree, treeChangeValue] = useTreeChangeValue();
  const isPageLoaded = usePageLoaded();
  const { bg, bgPath } = config;

  const onClickChangeValue = useCallback(
    (num: number) => {
      treeChangeValue({
        section: 'bg',
        value: num,
      });
    },
    [treeChangeValue]
  );
  return (
    <div className="selectorBg">
      <h2 className="treePage__title selectorBg__title">{config.selectBg}</h2>
      <div className="selectorBg__elements">
        {bg.map((el, i) => (
          <div
            key={el}
            style={{
              display: isPageLoaded ? '' : 'none',
              backgroundImage: bgPath[i],
              borderColor: tree.bg === Number(el) ? '#ff5454' : '',
            }}
            onClick={() => onClickChangeValue(Number(el))}
            className="selectorBg__element"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SelectorBg;
