import React from 'react';
import './style.scss';
import useActiveCandle from '@hooks/useActiveCandle';
import useTree from '@hooks/use-tree';

const SelectorCandles = () => {
  const [tree] = useTree();
  const [, setActiveCandle] = useActiveCandle();
  return (
    <div className="selectorCandles">
      <h2 className="treePage__title selectorCandles__title">Свечи</h2>
      <div className="selectorCandles__elements">
        {new Array(12).fill(0).map((_, i) => (
          <div
            key={i}
            className="selectorCandles__element"
            onMouseDown={(e) => {
              console.log(tree.candles);
              if (tree.candles.length >= 10) {
                return;
              }
              setActiveCandle({ type: i, x: e.pageX, y: e.pageY });
            }}
            onTouchStart={(e) => {
              if (tree.candles.length >= 10) {
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
