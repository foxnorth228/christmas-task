import React, { useEffect } from 'react';
import useActiveToy from '@hooks/use-active-toy';
import useToys from '@hooks/use-toys';
import useTree from '@hooks/use-tree';

interface IActiveToy {
  refActiveElement: React.RefObject<HTMLDivElement>;
  e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.Touch | null;
  setE: React.Dispatch<
    React.SetStateAction<React.MouseEvent<HTMLDivElement, MouseEvent> | React.Touch | null>
  >;
}

const ActiveToy = ({ refActiveElement, e, setE }: IActiveToy) => {
  const [toys, setToy] = useToys();
  const [tree, setTree] = useTree();
  const [activeToy, setActiveToy] = useActiveToy();
  useEffect(() => {
    const addToTree = (toy: { type: number; x: number; y: number }) =>
      setTree({ type: 'CHANGE_TREE_TOY', payload: { section: 'add', value: toy } });
    if (activeToy.type !== -1 && e !== null) {
      const a = document.elementFromPoint(e.pageX, e.pageY);
      if (a?.classList.contains('tree__toysArea_path')) {
        const x = e.clientX - a!.parentElement!.getBoundingClientRect().left;
        const y = e.clientY - a!.parentElement!.getBoundingClientRect().top;
        const toysArea = document.querySelector('.tree__toys') ?? new HTMLElement();
        const { width, height } = toysArea!.getBoundingClientRect();
        if (activeToy.old) {
          setTree({
            type: 'CHANGE_TREE_TOY',
            payload: {
              section: 'move',
              value: { old: activeToy.old, newX: (x / width) * 100, newY: (y / height) * 100 },
            },
          });
        } else {
          addToTree({ x: (x / width) * 100, y: (y / height) * 100, type: activeToy.type });
          setToy({ type: 'USED', payload: activeToy.type });
        }
      } else {
        if (activeToy.old) {
          setTree({
            type: 'CHANGE_TREE_TOY',
            payload: {
              section: 'delete',
              value: activeToy.old,
            },
          });
          setToy({ type: 'RETURNED', payload: activeToy.type });
        }
      }
      setActiveToy({ ...activeToy, type: -1, old: null });
      setE(null);
    }
  }, [activeToy, activeToy.type, e, setActiveToy, setE, setToy, setTree, toys, tree.toys]);
  useEffect(() => {
    if (refActiveElement.current === null) {
      return;
    }
    refActiveElement.current.classList.add('activeToy__toy');
    refActiveElement.current.style.backgroundImage = `url('./toys/${activeToy.type}.png')`;
    refActiveElement.current.style.left = activeToy.x + 'px';
    refActiveElement.current.style.top = activeToy.y + 'px';
  }, [activeToy, refActiveElement]);
  return <>{activeToy.type !== -1 && <div ref={refActiveElement} />}</>;
};

export default ActiveToy;
