import React, { useEffect } from 'react';
import useActivePresent from '@hooks/useActivePresent';
import useTree from '@hooks/use-tree';
import usePresents from '@hooks/usePresents';

interface IActivePresent {
  refActiveElement: React.RefObject<HTMLImageElement>;
  e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.Touch | null;
  setE: React.Dispatch<
    React.SetStateAction<React.MouseEvent<HTMLDivElement, MouseEvent> | React.Touch | null>
  >;
}

const ActivePresent = ({ refActiveElement, e, setE }: IActivePresent) => {
  const [, setPresent] = usePresents();
  const [, setTree] = useTree();
  const [activePresent, setActivePresent] = useActivePresent();
  useEffect(() => {
    const addToTree = (toy: { type: number; x: number; y: number }) =>
      setTree({ type: 'CHANGE_TREE_PRESENT', payload: { section: 'add', value: toy } });
    if (activePresent.type !== -1 && e !== null) {
      const a = document.elementFromPoint(e.pageX, e.pageY);
      if (a?.classList.contains('tree__toysArea_path')) {
        const x = e.clientX - a!.parentElement!.getBoundingClientRect().left;
        const y = e.clientY - a!.parentElement!.getBoundingClientRect().top;
        const toysArea = document.querySelector('.tree__toys') ?? new HTMLElement();
        const { width, height } = toysArea!.getBoundingClientRect();
        if ((y / height) * 100 < 80) {
          if (activePresent.old) {
            setTree({
              type: 'CHANGE_TREE_PRESENT',
              payload: {
                section: 'delete',
                value: activePresent.old,
              },
            });
          }
          setPresent({
            type: 'DELETE',
            payload: activePresent.type,
          });
          setActivePresent({ ...activePresent, type: -1 });
          setE(null);
          return;
        }
        if (activePresent.old) {
          setTree({
            type: 'CHANGE_TREE_PRESENT',
            payload: {
              section: 'move',
              value: { old: activePresent.old, newX: (x / width) * 100, newY: (y / height) * 100 },
            },
          });
        } else {
          addToTree({ type: activePresent.type, x: (x / width) * 100, y: (y / height) * 100 });
          setPresent({
            type: 'ADD',
            payload: activePresent.type,
          });
        }
      } else {
        if (activePresent.old) {
          setTree({
            type: 'CHANGE_TREE_PRESENT',
            payload: {
              section: 'delete',
              value: activePresent.old,
            },
          });
          setPresent({ type: 'DELETE', payload: activePresent.type });
        }
      }
      setActivePresent({ ...activePresent, type: -1 });
      setE(null);
    }
  }, [activePresent, activePresent.type, e, setActivePresent, setE, setPresent, setTree]);
  useEffect(() => {
    if (refActiveElement.current === null) {
      return;
    }
    refActiveElement.current.classList.add('activePresent');
    (refActiveElement.current as HTMLImageElement).src = `./presents/${
      activePresent.type + 1
    }.webp`;
    refActiveElement.current.style.left = activePresent.x + 'px';
    refActiveElement.current.style.top = activePresent.y + 'px';
  }, [activePresent, refActiveElement]);
  return <>{activePresent.type !== -1 && <img alt="activepresent" ref={refActiveElement} />}</>;
};

export default ActivePresent;
