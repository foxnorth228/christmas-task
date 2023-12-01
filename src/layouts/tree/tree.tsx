import React, { useCallback, useLayoutEffect, useReducer, useRef, useState } from 'react';
import './tree.scss';
import './candleFlame.scss';
import useActiveToy from '@hooks/useActiveToy';
import useGarland from '@hooks/useGarland';
import useActivePresent from '@hooks/useActivePresent';
import useActiveCandle from '@hooks/useActiveCandle';
import { ICandleTree } from '@store/slices/treeSlice/types';
import useLongTouch from '@hooks/useLongTouch';
import { useTreeChangeCandle } from '@src/store/slices/treeSlice/hooks';

const Tree = () => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [toy, setToy] = useState<HTMLDivElement | null>(null);
  const [tree, setCandleTree] = useTreeChangeCandle();
  const [present, setPresent] = useState<HTMLDivElement | null>(null);
  const [candle, setCandle] = useState<HTMLDivElement | null>(null);
  const garland = useRef<HTMLDivElement>(null);
  const elemGarland = useGarland(garland);
  const [activeToy, setActiveToy] = useActiveToy();
  const [activePresent, setActivePresent] = useActivePresent();
  const [activeCandle, setActiveCandle] = useActiveCandle();
  useLayoutEffect(() => {
    if (activeToy.type === -1 && toy !== null) {
      toy.style.display = '';
      setToy(null);
    }
  }, [activeToy.type, toy]);
  useLayoutEffect(() => {
    if (activePresent.type === -1 && present !== null) {
      present.style.display = '';
      setPresent(null);
    }
  }, [activePresent.type, present]);
  useLayoutEffect(() => {
    if (activeCandle.type === -1 && candle !== null) {
      candle.style.display = '';
      setCandle(null);
    }
  }, [activeCandle.type, activePresent.type, candle, present]);

  const onLongCandlePress = useCallback(
    (e: React.TouchEvent<HTMLDivElement>, el: ICandleTree) => {
      (e.target as HTMLElement).parentElement!.style!.display = 'none';
      setCandle(e.target);
      setActiveCandle({
        type: el.type,
        x: e.touches[0].pageX,
        y: e.touches[0].pageY,
        old: el,
      });
      return false;
    },
    [setActiveCandle]
  );

  const onCandleTouch = (e: React.TouchEvent<HTMLDivElement>, el: ICandleTree) => {
    e.preventDefault();
    e.stopPropagation();
    setCandleTree({
      section: 'switchLight',
      value: el,
    });
    forceUpdate();
    return false;
  };

  const longTouchCandle = useLongTouch(onLongCandlePress, onCandleTouch);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (
    <div style={{ backgroundImage: `url('./bg/${tree.bg}.webp')` }} className="tree__bg">
      <div className="tree_interaction">
        <div
          className="tree__star"
          style={{ backgroundImage: `url("./stars/${tree.star}.webp")` }}
        ></div>
        <div className="tree__toys">
          {tree.toys.map((el, i) => (
            <div
              key={`${el.type}${el.x}${el.y}${i}`}
              className="tree__toy"
              style={{
                left: el.x + '%',
                top: el.y + '%',
                backgroundImage: `url('./toys/${el.type}.webp')`,
              }}
              onMouseDown={(e) => {
                e.currentTarget!.style!.display = 'none';
                setToy(e.currentTarget);
                setActiveToy({ x: e.pageX, y: e.pageY, type: el.type, old: el });
              }}
              onTouchStart={(e) => {
                e.currentTarget!.style!.display = 'none';
                setToy(e.currentTarget);
                setActiveToy({
                  x: e.changedTouches[0].pageX,
                  y: e.changedTouches[0].pageY,
                  type: el.type,
                  old: el,
                });
              }}
            />
          ))}
          {tree.presents.map((el, i) => (
            <img
              key={el.x + el.y + el.type + i}
              style={{ left: el.x + '%', top: el.y + '%' }}
              className="tree__present"
              alt="activepresent"
              draggable={false}
              src={`./presents/${el.type + 1}.webp`}
              onMouseDown={(e) => {
                e.currentTarget!.style!.display = 'none';
                setPresent(e.currentTarget);
                setActivePresent({ type: el.type, x: e.pageX, y: e.pageY, old: el });
              }}
              onTouchStart={(e) => {
                e.currentTarget!.style!.display = 'none';
                setPresent(e.currentTarget);
                setActivePresent({
                  type: el.type,
                  x: e.touches[0].pageX,
                  y: e.touches[0].pageY,
                  old: el,
                });
              }}
            />
          ))}
          {tree.candles.map((el, i) => (
            <div
              style={{ left: el.x + '%', top: el.y + '%' }}
              className="tree__candleBody"
              key={el.x + el.y + el.type + i}
              onContextMenu={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCandleTree({
                  section: 'switchLight',
                  value: el,
                });
                forceUpdate();
                return false;
              }}
              onMouseDown={(e) => {
                if (e.button !== 0) {
                  return;
                }
                e.currentTarget!.style!.display = 'none';
                setCandle(e.currentTarget);
                setActiveCandle({ type: el.type, x: e.pageX, y: e.pageY, old: el });
              }}
              {...longTouchCandle([el, this])}
            >
              <img
                className="tree__candle"
                alt="activecandle"
                draggable={false}
                src={`./candles/${el.type + 1}.webp`}
              />
              {el.isFired &&
                el.fireplace.map((el, i) => (
                  <div
                    key={i}
                    style={{ left: el.x * 100 + '%', top: el.y * 100 + '%' }}
                    className="candle"
                  >
                    <div className="flame">
                      <div className="shadows"></div>
                      <div className="top"></div>
                      <div className="middle"></div>
                      <div className="bottom"></div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
        <div ref={garland} className="tree__garland">
          {elemGarland}
        </div>
        <img src={`./tree/${tree.tree}.webp`} className="tree" alt="tree"></img>
        <svg
          id="eHKqEiOVgRr1"
          className="tree__toysArea"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          height="100%"
          preserveAspectRatio="xMinYMin meet"
          viewBox="0 0 500 714"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
        >
          <path
            className="tree__toysArea_path"
            d="M 250 10 L 20 580 L 65 650 L 200 700 H 380 L 450 665 L 480 580 Z"
            stroke="#00000000"
            strokeWidth="1"
            fill="#00000000"
          />
        </svg>
      </div>
    </div>
  );
};

export default Tree;
