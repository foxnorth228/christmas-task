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
  const refToy = useRef<HTMLDivElement>(null);
  const [toys, setToy] = useToys();
  const [, setTree] = useTree();
  const [activeToy, setActiveToy] = useActiveToy();
  const [activePresent, setActivePresent] = useActivePresent();
  const [activeCandle, setActiveCandle] = useActiveCandle();
  useEffect(() => {
    if (refToy.current === null) {
      return;
    }
    refToy.current.style.left = activeToy.x + 'px';
    refToy.current.style.top = activeToy.y + 'px';
  }, [activeToy]);
  const touchmove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (refToy.current === null) {
      return;
    }
    refToy.current.style.left = e.targetTouches[0].pageX + 'px';
    refToy.current.style.top = e.targetTouches[0].pageY + 'px';
  };
  return (
    <>
      <div
        className="page treePage"
        onMouseMove={(e) => {
          if (refToy.current === null) {
            return;
          }
          refToy.current.style.left = e.pageX + 'px';
          refToy.current.style.top = e.pageY + 'px';
        }}
        onTouchMove={touchmove}
        onMouseUp={(e) => {
          if (refToy.current === null) {
            return;
          }
          refToy.current.style.pointerEvents = 'none';
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
            console.log(x, y, width, height, refToy.current.getBoundingClientRect())
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
          if (refToy.current === null) {
            return;
          }
          refToy.current.style.pointerEvents = 'none';
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
        {activeToy.type !== -1 ? (
          <div
            ref={refToy}
            className="activeToy__toy"
            style={{ backgroundImage: `url('./toys/${activeToy.type}.png')` }}
          />
        ) : (
          false
        )}
      </div>
    </>
  );
}

export default TreePage;
