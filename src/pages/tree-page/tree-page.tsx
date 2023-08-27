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
          refToy.current.style.left = e.pageX - 25 + 'px';
          refToy.current.style.top = e.pageY - 25 + 'px';
        }}
        onMouseUp={(e) => {
          if (refToy.current === null) {
            return;
          }
          refToy.current.style.pointerEvents = 'none';
          const a = document.elementFromPoint(e.pageX, e.pageY);
          console.log(a, a?.classList.contains('tree__toysArea_path'));
          setActiveToy(-1);
        }}
      >
        <LeftMenuTreePage />
        <Tree />
        <RightMenuTreePage />
        {activeToy !== -1 ? (
          <div
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
