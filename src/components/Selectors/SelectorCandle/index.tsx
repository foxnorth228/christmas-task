import React, { useCallback } from 'react';
import './style.scss';
import useActiveCandle from '@hooks/useActiveCandle';
import { useTree } from '@src/store/slices/treeSlice/hooks';
import usePageLoaded from '@hooks/usePageLoaded';
import config from './config';

const SelectorCandles = () => {
  const isPageLoaded = usePageLoaded();
  const tree = useTree();
  const [, setActiveCandle] = useActiveCandle();
  const { candle, candlePath } = config;
  const onCandleMouseDown = useCallback(
    (i: number, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (tree.candles.length >= 10) {
        return;
      }
      setActiveCandle({ type: i, x: e.pageX, y: e.pageY });
    },
    [setActiveCandle, tree.candles.length]
  );

  const onCandleTouchStart = useCallback(
    (i: number, e: React.TouchEvent<HTMLDivElement>) => {
      if (tree.candles.length >= 10) {
        return;
      }
      setActiveCandle({ type: i, x: e.touches[0].pageX, y: e.touches[0].pageY });
    },
    [setActiveCandle, tree.candles.length]
  );
  return (
    <div className="selectorCandles">
      <h2 className="treePage__title selectorCandles__title">{config.selectCandle}</h2>
      <div className="selectorCandles__elements">
        {candle.map((el, i) => (
          <div
            key={el}
            className="selectorCandles__element"
            onMouseDown={(e) => onCandleMouseDown(i, e)}
            onTouchStart={(e) => onCandleTouchStart(i, e)}
          >
            <div
              style={{
                display: isPageLoaded ? '' : 'none',
                backgroundImage: candlePath[i],
              }}
              className="selectorCandles__example"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectorCandles;
