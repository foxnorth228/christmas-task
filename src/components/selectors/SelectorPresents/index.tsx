import React from 'react';
import './style.scss';
import useActivePresent from '@hooks/useActivePresent';

const SelectorPresents = () => {
  const [, setActivePresent] = useActivePresent();
  return (
    <div className="selectorPresents">
      <h2 className="treePage__title">Подарки</h2>
      <div className="selectorPresents__elements">
        {new Array(20).fill(0).map((_, i) => (
          <div
            key={i}
            className="selectorPresents__element"
            onMouseDown={(e) => setActivePresent({ type: i + 1, x: e.pageX, y: e.pageY })}
            onTouchStart={(e) =>
              setActivePresent({ type: i + 1, x: e.touches[0].pageX, y: e.touches[0].pageY })
            }
          >
            <div
              style={{ backgroundImage: `url('./presents/${i + 1}.png')` }}
              className="selectorPresents__example"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectorPresents;
