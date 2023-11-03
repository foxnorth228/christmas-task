import React, { useRef, useState} from 'react';
import './tree-page.scss';
import LeftMenuTreePage from '@layouts/left-menu-tree-page/left-menu-tree-page';
import Tree from '@layouts/tree/tree';
import RightMenuTreePage from '@layouts/right-menu-tree-page/right-menu-tree-page';
import ActiveToy from '@pages/tree-page/ActiveToy';
import ActivePresent from '@pages/tree-page/ActivePresent';

function TreePage() {
  type TEvent = React.MouseEvent<HTMLDivElement, MouseEvent> | React.Touch | null;
  const [event, setEvent] = useState<TEvent>(null);
  const refActiveElement = useRef<HTMLDivElement | HTMLImageElement>(null);

  const processMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.Touch) => {
    if (refActiveElement.current === null) {
      return;
    }
    refActiveElement.current.style.left = e.pageX + 'px';
    refActiveElement.current.style.top = e.pageY + 'px';
  };
  const mouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => processMove(e);
  const touchmove = (e: React.TouchEvent<HTMLDivElement>) => processMove(e.changedTouches[0]);

  const processEndOfActivity = (e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.Touch) => {
    if (refActiveElement.current === null) {
      return;
    }
    setEvent(e);
  };
  const mouseup = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => processEndOfActivity(e);
  const touchend = (e: React.TouchEvent) => processEndOfActivity(e.changedTouches[0]);

  return (
    <>
      <div
        className="page treePage"
        onMouseMove={mouseMove}
        onTouchMove={touchmove}
        onMouseUp={mouseup}
        onTouchEnd={touchend}
      >
        <LeftMenuTreePage />
        <Tree />
        <RightMenuTreePage />
        <ActiveToy refActiveElement={refActiveElement} e={event} setE={setEvent} />
        <ActivePresent
          refActiveElement={refActiveElement as React.RefObject<HTMLImageElement>}
          e={event}
          setE={setEvent}
        />
      </div>
    </>
  );
}

export default TreePage;
