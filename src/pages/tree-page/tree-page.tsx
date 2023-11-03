import React, { useEffect, useRef } from 'react';
import './tree-page.scss';
import LeftMenuTreePage from '@layouts/left-menu-tree-page/left-menu-tree-page';
import Tree from '@layouts/tree/tree';
import RightMenuTreePage from '@layouts/right-menu-tree-page/right-menu-tree-page';
import useActiveToy from '@hooks/use-active-toy';
import useTree from '@hooks/use-tree';
import useToys from '@hooks/use-toys';
import useActivePresent from '@hooks/useActivePresent';
import useActiveCandle from '@hooks/useActiveCandle';

function TreePage() {
  const refActiveElement = useRef<HTMLDivElement>(null);
  const [toys, setToy] = useToys();
  const [, setTree] = useTree();
  const [activeToy, setActiveToy] = useActiveToy();
  const [activePresent, setActivePresent] = useActivePresent();
  const [activeCandle, setActiveCandle] = useActiveCandle();
  console.log(activePresent)
  useEffect(() => {
    if (refActiveElement.current === null) {
      return;
    }
    let activeElement: { type: number; x: number; y: number } = { type: -1, x: 0, y: 0 };
    switch (true) {
      case activeToy.type !== -1:
        activeElement = activeToy;
        refActiveElement.current.classList.add('activeToy__toy');
        break;
      case activePresent.type !== -1:
        activeElement = activePresent;
        refActiveElement.current.classList.add('activeToy__toy');
        break;
      case activeCandle.type !== -1:
        activeElement = activeCandle;
        refActiveElement.current.classList.add('activeToy__toy');
        break;
    }
    refActiveElement.current.style.left = activeElement.x + 'px';
    refActiveElement.current.style.top = activeElement.y + 'px';
  }, [activeCandle, activePresent, activeToy]);
  const touchmove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (refActiveElement.current === null) {
      return;
    }
    refActiveElement.current.style.left = e.targetTouches[0].pageX + 'px';
    refActiveElement.current.style.top = e.targetTouches[0].pageY + 'px';
  };
  return (
    <>
      <div
        className="page treePage"
        onMouseMove={(e) => {
          if (refActiveElement.current === null) {
            return;
          }
          refActiveElement.current.style.left = e.pageX + 'px';
          refActiveElement.current.style.top = e.pageY + 'px';
        }}
        onTouchMove={touchmove}
        onMouseUp={(e) => {
          if (refActiveElement.current === null) {
            return;
          }
          refActiveElement.current.style.pointerEvents = 'none';
          const a = document.elementFromPoint(e.pageX, e.pageY);
          const toy = toys.find((el) => el.num === activeToy.type);
          if (a?.classList.contains('tree__toysArea_path') && toy && toy.countFreeToys !== 0) {
            const x =
              e.pageX -
              a?.parentElement?.getBoundingClientRect().left;
            const y = e.pageY - a?.parentElement?.getBoundingClientRect().top;
            console.log(e.pageX, e.pageY, a?.parentElement, a?.parentElement?.getBoundingClientRect())
            const type = activeToy.type;
            const toysArea = document.querySelector('.tree__toys') ?? new HTMLElement();
            const { width, height } = toysArea?.getBoundingClientRect();
            console.log(x, y, width, height, refActiveElement.current.getBoundingClientRect())
            setToy({ type: 'USED', payload: activeToy.type });
            setTree({
              type: 'CHANGE_TREE_TOY',
              payload: {
                section: 'add',
                value: {
                  x: (x / width) * 100,
                  y: (y / height) * 100,
                  type,
                },
              },
            });
          }
          setActiveToy({ ...activeToy, type: -1 });
        }}
        onTouchEnd={(e) => {
          if (refActiveElement.current === null) {
            return;
          }
          refActiveElement.current.style.pointerEvents = 'none';
          const a = document.elementFromPoint(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
          const toy = toys.find((el) => el.num === activeToy.type);
          if (a?.classList.contains('tree__toysArea_path') && toy && toy.countFreeToys !== 0) {
            const x =
              e.changedTouches[0].clientX -
              a?.parentElement?.getBoundingClientRect().left;
            const y = e.changedTouches[0].clientY - a?.parentElement?.getBoundingClientRect().top;
            const type = activeToy.type;
            const toysArea = document.querySelector('.tree__toys') ?? new HTMLElement();
            const { width, height } = toysArea?.getBoundingClientRect();
            setToy({ type: 'USED', payload: activeToy.type });
            setTree({
              type: 'CHANGE_TREE_TOY',
              payload: {
                section: 'delete',
                value: activeToy,
              },
            });
            setTree({
              type: 'CHANGE_TREE_TOY',
              payload: {
                section: 'add',
                value: {
                  x: (x / width) * 100,
                  y: (y / height) * 100,
                  type,
                },
              },
            });
          }
          setActiveToy({ ...activeToy, type: -1 });
        }}
      >
        <LeftMenuTreePage />
        <Tree />
        <RightMenuTreePage />
        {activeToy.type !== -1 && (
          <div
            ref={refActiveElement}
            style={{ backgroundImage: `url('./toys/${activeToy.type}.png')` }}
          />
        )}
      </div>
    </>
  );
}

export default TreePage;
