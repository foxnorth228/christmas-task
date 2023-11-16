import React from 'react';
import './style.scss';
import useActiveCandle from '@hooks/useActiveCandle';
import useCandles from '@hooks/useCandles';

const SelectorCandles = () => {
  const [candles] = useCandles();
  const [, setActiveCandle] = useActiveCandle();
  return (
    <div className="selectorCandles">
      <h2 className="treePage__title selectorCandles__title">Свечи</h2>
      <div className="selectorCandles__elements">
        {new Array(12).fill(0).map((_, i) => (
          <div
            key={i}
            style={{ filter: candles.includes(i) ? 'grayscale(80%)' : '' }}
            className="selectorCandles__element"
            onMouseDown={(e) => {
              if (candles.includes(i) || candles.length >= 5) {
                return;
              }
              setActiveCandle({ type: i, x: e.pageX, y: e.pageY });
            }}
            onTouchStart={(e) => {
              if (candles.includes(i) || candles.length >= 5) {
                return;
              }
              setActiveCandle({ type: i, x: e.touches[0].pageX, y: e.touches[0].pageY });
            }}
          >
            <div
              style={{ backgroundImage: `url('./candles/${i + 1}.png')` }}
              className="selectorCandles__example"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectorCandles;
