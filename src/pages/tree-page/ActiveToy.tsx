import React, { useEffect } from 'react';
import useActiveToy from '@hooks/useActiveToy';
import { useToysReturned, useToysUse } from '@src/store/slices/toysSlice/hooks';
import { useTreeChangeToy } from '@src/store/slices/treeSlice/hooks';

interface IActiveToy {
  refActiveElement: React.RefObject<HTMLDivElement>;
  e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.Touch | null;
  setE: React.Dispatch<
    React.SetStateAction<React.MouseEvent<HTMLDivElement, MouseEvent> | React.Touch | null>
  >;
}

const ActiveToy = ({ refActiveElement, e, setE }: IActiveToy) => {
  const [, usedToy] = useToysUse();
  const [, returnToy] = useToysReturned();
  const [, setTreeToy] = useTreeChangeToy();
  const [activeToy, setActiveToy] = useActiveToy();
  useEffect(() => {
    if (activeToy.type !== -1 && e !== null) {
      const a = document.elementFromPoint(e.pageX, e.pageY);
      if (a?.classList.contains('tree__toysArea_path')) {
        const x = e.clientX - a!.parentElement!.getBoundingClientRect().left;
        const y = e.clientY - a!.parentElement!.getBoundingClientRect().top;
        const toysArea = document.querySelector('.tree__toys') ?? new HTMLElement();
        const { width, height } = toysArea!.getBoundingClientRect();
        if (activeToy.old) {
          setTreeToy({
            section: 'move',
            value: { old: activeToy.old, newX: (x / width) * 100, newY: (y / height) * 100 },
          });
        } else {
          console.log('add');
          setTreeToy({
            section: 'add',
            value: { x: (x / width) * 100, y: (y / height) * 100, type: activeToy.type },
          });
          usedToy(activeToy.type);
        }
      } else {
        if (activeToy.old) {
          setTreeToy({
            section: 'delete',
            value: activeToy.old,
          });
          returnToy(activeToy.type);
        }
      }
      setActiveToy({ ...activeToy, type: -1 });
      setE(null);
    }
  }, [activeToy, activeToy.type, e, setE]);
  useEffect(() => {
    if (refActiveElement.current === null) {
      return;
    }
    refActiveElement.current.classList.add('activeToy__toy');
    refActiveElement.current.style.backgroundImage = `url('./toys/${activeToy.type}.webp')`;
    refActiveElement.current.style.left = activeToy.x + 'px';
    refActiveElement.current.style.top = activeToy.y + 'px';
  }, [activeToy, refActiveElement]);
  return (
    <div
      style={{ display: activeToy.type !== -1 ? '' : 'none' }}
      ref={activeToy.type === -1 ? undefined : refActiveElement}
    />
  );
};

export default ActiveToy;
