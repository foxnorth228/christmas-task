import React, { useCallback } from 'react';
import './style.scss';
import useActivePresent from '@hooks/useActivePresent';
import { usePresents } from '@store/slices/treeSlice/hooks';
import usePageLoaded from '@hooks/usePageLoaded';

const SelectorPresents = () => {
  const isPageLoaded = usePageLoaded();
  const presents = usePresents();
  const [, setActivePresent] = useActivePresent();

  const onMouseDownPresent = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>, i: number) => {
      if (presents.includes(i) || presents.length >= 5) {
        return;
      }
      setActivePresent({ type: i, x: e.pageX, y: e.pageY });
    },
    [presents, setActivePresent]
  );

  const onTouchStartPresent = useCallback(
    (e: React.TouchEvent<HTMLDivElement>, i: number) => {
      if (presents.includes(i) || presents.length >= 5) {
        return;
      }
      setActivePresent({ type: i, x: e.touches[0].pageX, y: e.touches[0].pageY });
    },
    [presents, setActivePresent]
  );
  return (
    <div className="selectorPresents">
      <h2 className="treePage__title selectorPresents__title">Подарки</h2>
      <div className="selectorPresents__elements">
        {new Array(20).fill(0).map((_, i) => (
          <div
            key={i}
            style={{ filter: presents.includes(i) ? 'grayscale(80%)' : '' }}
            className="selectorPresents__element"
            onMouseDown={(e) => onMouseDownPresent(e, i)}
            onTouchStart={(e) => onTouchStartPresent(e, i)}
          >
            <div
              style={{
                display: isPageLoaded ? '' : 'none',
                backgroundImage: `url('./presents/${i + 1}.webp')`,
              }}
              className="selectorPresents__example"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectorPresents;
