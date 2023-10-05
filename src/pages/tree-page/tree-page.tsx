import React, { useEffect, useRef } from 'react';
import './tree-page.css';
import LeftMenuTreePage from '@layouts/left-menu-tree-page/left-menu-tree-page';
import Tree from '@layouts/tree/tree';
import RightMenuTreePage from '@layouts/right-menu-tree-page/right-menu-tree-page';
import useActiveToy from '@hooks/use-active-toy';
import useTree from '@hooks/use-tree';
import useToys from '@hooks/use-toys';

function TreePage() {
  const refToy = useRef<HTMLDivElement>(null);
  const [toys, setToy] = useToys();
  const [, setTree] = useTree();
  const [activeToy, setActiveToy] = useActiveToy();
  useEffect(() => {
    if (refToy.current === null) {
      return;
    }
    refToy.current.style.left = activeToy.x - 25 + 'px';
    refToy.current.style.top = activeToy.y + 'px';
  }, [activeToy.x, activeToy.y]);
  return (
    <>
      <div
        className="page treePage"
        onMouseMove={(e) => {
          if (refToy.current === null) {
            return;
          }
          refToy.current.style.left = e.pageX - 25 + 'px';
          refToy.current.style.top = e.pageY + 'px';
        }}
        onMouseUp={(e) => {
          if (refToy.current === null) {
            return;
          }
          refToy.current.style.pointerEvents = 'none';
          const a = document.elementFromPoint(e.pageX, e.pageY);
          const toy = toys.find((el) => el.num === activeToy.type);
          if (a?.classList.contains('tree__toysArea_path') && toy && toy.countFreeToys !== 0) {
            const x =
              e.clientX -
              a?.parentElement?.getBoundingClientRect().left -
              refToy?.current?.getBoundingClientRect()?.width / 2;
            const y = e.clientY - a?.parentElement?.getBoundingClientRect().top;
            const type = activeToy.type;
            setToy({ type: 'USED', payload: activeToy.type });
            setTree({
              type: 'CHANGE_TREE_TOY',
              payload: {
                section: 'add',
                value: {
                  x,
                  y,
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
