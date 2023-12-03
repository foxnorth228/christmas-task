import React, {useCallback} from 'react';
import './style.scss';
import usePageLoaded from '@hooks/usePageLoaded';
import { useTreeChangeValue } from '@src/store/slices/treeSlice/hooks';

const SelectorStar = () => {
  const isPageLoaded = usePageLoaded();
  const [tree, changeTree] = useTreeChangeValue();

  const onCLickStar = useCallback((i: number) => {
    changeTree({
      section: 'star',
      value: Number(i + 1),
    });
  }, [changeTree]);
  return (
    <div className="selectorStar">
      <h2 className="treePage__title ">Выберите звезду</h2>
      <div className="selectorStar__elements">
        {new Array(12).fill(0).map((_, i) => (
          <div
            key={i}
            className="selectorStar__element"
            onClick={() => onCLickStar(i)}
          >
            <div
              style={{
                display: isPageLoaded ? '' : 'none',
                backgroundImage: `url("./stars/${i + 1}.webp")`,
                filter: tree.star === Number(i + 1) ? 'drop-shadow(0px 0px 10px blue)' : '',
              }}
              className="selectorStar__example"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectorStar;
