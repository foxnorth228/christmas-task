import React, {useRef} from 'react';
import './tree-page.css';
import LeftMenuTreePage from '@layouts/left-menu-tree-page/left-menu-tree-page';
import Tree from '@layouts/tree/tree';
import RightMenuTreePage from '@layouts/right-menu-tree-page/right-menu-tree-page';
import useActiveToy from '@hooks/use-active-toy';

function TreePage() {
  const refToy = useRef<HTMLDivElement>(null);
  const [activeToy, setActiveToy] = useActiveToy();
  return (
    <>
      <div
        className="page treePage"
        onMouseMove={(e) => {
          if (refToy.current === null) {
            return;
          }
          refToy.current.style.left = e.pageX - 15 + 'px';
          refToy.current.style.top = e.pageY - 15 + 'px';
        }}
      >
        <LeftMenuTreePage />
        <Tree />
        <RightMenuTreePage />
        {activeToy !== -1 ? (
          <div
            onMouseUp={(e) => {
              (e.target as HTMLDivElement).style.pointerEvents = 'none';
              const a = document.elementFromPoint(e.pageX, e.pageY);
              (e.target as HTMLDivElement).style.pointerEvents = '';
              console.log(a, a?.classList.contains('tree__toysArea_path'));
              setActiveToy(-1);
            }}
            ref={refToy}
            className="activeToy__toy"
            style={{ backgroundImage: `url('./toys/${activeToy}.png')` }}
          />
        ) : (
          false
        )}
      </div>
    </>
  );
}

export default TreePage;
