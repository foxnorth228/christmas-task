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
  const addToTree = (toy: { type: number; x: number; y: number }) =>
    setTree({ type: 'CHANGE_TREE_TOY', payload: { section: 'add', value: toy } });
  const [activePresent, setActivePresent] = useActivePresent();
  useEffect(() => {
    if (activePresent.type !== -1 && e !== null) {
      const a = document.elementFromPoint(e.pageX, e.pageY);
      if (a?.classList.contains('tree__toysArea_path')) {
        const x = e.clientX - a!.parentElement!.getBoundingClientRect().left;
        const y = e.clientY - a!.parentElement!.getBoundingClientRect().top;
        const toysArea = document.querySelector('.tree__toys') ?? new HTMLElement();
        const { width, height } = toysArea!.getBoundingClientRect();
        // setToy({ type: 'USED', payload: activePresent.type });
        // addToTree({ x: (x / width) * 100, y: (y / height) * 100, type: activePresent.type });
        setPresent({
          type: 'ADD',
          payload: { type: activePresent.type, x: (x / width) * 100, y: (y / height) * 100 },
        });
      } else {
        setPresent({
          type: 'DELETE',
          payload: { type: activePresent.type, x: 0, y: 0 },
        });
      }
      setActivePresent({ ...activePresent, type: -1 });
      setE(null);
    }
  }, [activePresent, activePresent.type, addToTree, e, setActivePresent, setE, setPresent]);
  useEffect(() => {
    if (refActiveElement.current === null) {
      return;
    }
    refActiveElement.current.classList.add('activePresent');
    (refActiveElement.current as HTMLImageElement).src = `./presents/${activePresent.type + 1}.png`;
    refActiveElement.current.style.left = activePresent.x + 'px';
    refActiveElement.current.style.top = activePresent.y + 'px';
  }, [activePresent, refActiveElement]);
  return <>{activePresent.type !== -1 && <img alt="activepresent" ref={refActiveElement} />}</>;
};

export default ActivePresent;
