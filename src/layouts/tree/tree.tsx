import React, { useRef } from 'react';
import './tree.scss';
import useTree from '@hooks/use-tree';
import useToys from '@hooks/use-toys';
import useActiveToy from '@hooks/use-active-toy';
import useGarland from '@hooks/useGarland';
import useActivePresent from "@hooks/useActivePresent";

const Tree = () => {
  const garland = useRef<HTMLDivElement>(null);
  const elemGarland = useGarland(garland);
  const [, setActiveToy] = useActiveToy();
  const [, setActivePresent] = useActivePresent();
  const [, setToys] = useToys();
  const [tree, setTree] = useTree();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (
    <div style={{ backgroundImage: `url('./bg/${tree.bg}.jpg')` }} className="tree__bg">
      <div className="tree_interaction">
        <div
          className="tree__star"
          style={{ backgroundImage: `url("./stars/${tree.star}.png")` }}
        ></div>
        <div className="tree__toys">
          {tree.toys.map((el) => (
            <div
              key={`${el.type}${el.x}${el.y}`}
              className="tree__toy"
              style={{
                left: el.x + '%',
                top: el.y + '%',
                backgroundImage: `url('./toys/${el.type}.png')`,
              }}
              onMouseDown={(e) => {
                setTree({
                  type: 'CHANGE_TREE_TOY',
                  payload: {
                    section: 'delete',
                    value: el,
                  },
                });
                setToys({ type: 'RETURNED', payload: el.type });
                setActiveToy({ x: e.pageX, y: e.pageY, type: el.type });
              }}
              onTouchStart={(e) => {
                e.currentTarget!.style!.visibility = 'hidden';
                setToys({ type: 'RETURNED', payload: el.type });
                setActiveToy({
                  x: e.touches[0].pageX,
                  y: e.touches[0].pageY,
                  type: el.type,
                });
                setTimeout(
                  () =>
                    setTree({
                      type: 'CHANGE_TREE_TOY',
                      payload: {
                        section: 'delete',
                        value: el,
                      },
                    }),
                  0
                );
              }}
            />
          ))}
          {tree.presents.map((el, i) => (
            <img
              key={i}
              style={{ left: el.x + '%', top: el.y + '%' }}
              className="tree__present"
              alt="activepresent"
              draggable={false}
              src={`./presents/${el.type + 1}.png`}
              onMouseDown={(e) => {
                setTree({ type: 'CHANGE_TREE_PRESENT', payload: { section: 'delete', value: el } });
                setActivePresent({ type: el.type, x: e.pageX, y: e.pageY });
              }}
              onTouchStart={(e) => {
                setTree({ type: 'CHANGE_TREE_PRESENT', payload: { section: 'delete', value: el } });
                setActivePresent({ type: el.type, x: e.touches[0].pageX, y: e.touches[0].pageY });
              }}
            />
          ))}
        </div>
        <div ref={garland} className="tree__garland">
          {elemGarland}
        </div>
        <img src={`./tree/${tree.tree}.png`} className="tree" alt="tree"></img>
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
