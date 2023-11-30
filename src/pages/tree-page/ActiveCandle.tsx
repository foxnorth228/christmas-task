import React, { useEffect } from 'react';
import useActiveCandle from '@hooks/useActiveCandle';
import { useTreeChangeCandle } from '@src/store/slices/treeSlice/hooks';

interface IActivePresent {
  refActiveElement: React.RefObject<HTMLImageElement>;
  e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.Touch | null;
  setE: React.Dispatch<
    React.SetStateAction<React.MouseEvent<HTMLDivElement, MouseEvent> | React.Touch | null>
  >;
}

const ActiveCandle = ({ refActiveElement, e, setE }: IActivePresent) => {
  const [, setTree] = useTreeChangeCandle();
  const [activeCandle, setActiveCandle] = useActiveCandle();
  useEffect(() => {
    if (activeCandle.type !== -1 && e !== null) {
      const a = document.elementFromPoint(e.pageX, e.pageY);
      if (a?.classList.contains('tree__toysArea_path')) {
        const x = e.clientX - a!.parentElement!.getBoundingClientRect().left;
        const y = e.clientY - a!.parentElement!.getBoundingClientRect().top;
        const toysArea = document.querySelector('.tree__toys') ?? new HTMLElement();
        const { width, height } = toysArea!.getBoundingClientRect();
        if (activeCandle.old) {
          setTree({
            section: 'move',
            value: { old: activeCandle.old, newX: (x / width) * 100, newY: (y / height) * 100 },
          });
        } else {
          setTree({
            section: 'add',
            value: { type: activeCandle.type, x: (x / width) * 100, y: (y / height) * 100 },
          });
        }
      } else {
        if (activeCandle.old) {
          setTree({
            section: 'delete',
            value: activeCandle.old,
          });
        }
      }
      setActiveCandle({ ...activeCandle, type: -1 });
      setE(null);
    }
  }, [activeCandle, e, setE]);
  useEffect(() => {
    if (refActiveElement.current === null) {
      return;
    }
    refActiveElement.current.classList.add('activeCandle');
    (refActiveElement.current as HTMLImageElement).src = `./candles/${activeCandle.type + 1}.webp`;
    refActiveElement.current.style.left = activeCandle.x + 'px';
    refActiveElement.current.style.top = activeCandle.y + 'px';
  }, [activeCandle, refActiveElement]);
  return (
    <img
      alt="activecandle"
      style={{ display: activeCandle.type !== -1 ? '' : 'none' }}
      ref={activeCandle.type === -1 ? undefined : refActiveElement}
    />
  );
};

export default ActiveCandle;
