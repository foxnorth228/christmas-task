import React from 'react';
import './style.scss';
import useActiveCandle from '@hooks/useActiveCandle';

const SelectorCandles = () => {
  const [, setActiveCandle] = useActiveCandle();
  return (
    <div className="selectorCandles">
      <h2 className="treePage__title">Свечи</h2>
      <div className="selectorCandles__elements">
        {new Array(8).fill(0).map((_, i) => (
          <div
            key={i}
            className="selectorCandles__element"
            onMouseDown={(e) => setActiveCandle({ type: i, x: e.pageX, y: e.pageY })}
            onTouchStart={(e) =>
              setActiveCandle({ type: i, x: e.touches[0].pageX, y: e.touches[0].pageY })
            }
          >
            <div className="selectorCandles__example"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectorCandles;
