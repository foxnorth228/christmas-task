import React from 'react';
import './style.scss';
import useActivePresent from '@hooks/useActivePresent';
import usePresents from '@hooks/usePresents';

const SelectorPresents = () => {
  const [presents] = usePresents();
  const [, setActivePresent] = useActivePresent();
  return (
    <div className="selectorPresents">
      <h2 className="treePage__title selectorPresents__title">Подарки</h2>
      <div className="selectorPresents__elements">
        {new Array(20).fill(0).map((_, i) => (
          <div
            key={i}
            style={{ filter: presents.includes(i) ? 'grayscale(80%)' : '' }}
            className="selectorPresents__element"
            onMouseDown={(e) => {
              if (presents.includes(i) || presents.length >= 5) {
                return;
              }
              setActivePresent({ type: i, x: e.pageX, y: e.pageY });
            }}
            onTouchStart={(e) => {
              if (presents.includes(i) || presents.length >= 5) {
                return;
              }
              setActivePresent({ type: i, x: e.touches[0].pageX, y: e.touches[0].pageY });
            }}
          >
            <div
              style={{ backgroundImage: `url('./presents/${i + 1}.webp')` }}
              className="selectorPresents__example"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectorPresents;
