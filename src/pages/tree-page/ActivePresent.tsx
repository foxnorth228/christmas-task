import React, { useEffect } from 'react';
import useActivePresent from '@hooks/useActivePresent';
import useToys from "@hooks/use-toys";
import useTree from "@hooks/use-tree";

interface IActivePresent {
  refActiveElement: React.RefObject<HTMLImageElement>;
  e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.Touch | null;
  setE: React.Dispatch<
    React.SetStateAction<React.MouseEvent<HTMLDivElement, MouseEvent> | React.Touch | null>
  >;
}

const ActivePresent = ({ refActiveElement, e, setE }: IActivePresent) => {
  const [toys, setToy] = useToys();
  const [, setTree] = useTree();
  const addToTree = (toy: { type: number; x: number; y: number }) =>
    setTree({ type: 'CHANGE_TREE_TOY', payload: { section: 'add', value: toy } });
  const [activePresent, setActivePresent] = useActivePresent();
  useEffect(() => {
    if (activePresent.type !== -1 && e !== null) {
      const a = document.elementFromPoint(e.pageX, e.pageY);
      const toy = toys.find((el) => el.num === activePresent.type);
      if (a?.classList.contains('tree__toysArea_path') && toy && toy.countFreeToys !== 0) {
        // const x = e.clientX - a!.parentElement!.getBoundingClientRect().left;
        // const y = e.clientY - a!.parentElement!.getBoundingClientRect().top;
        // const toysArea = document.querySelector('.tree__toys') ?? new HTMLElement();
        // const { width, height } = toysArea!.getBoundingClientRect();
        // setToy({ type: 'USED', payload: activePresent.type });
        // addToTree({ x: (x / width) * 100, y: (y / height) * 100, type: activePresent.type });
      }
      setActivePresent({ ...activePresent, type: -1 });
      setE(null);
    }
  }, [activePresent, activePresent.type, addToTree, e, setActivePresent, setE, setToy, toys]);
  useEffect(() => {
    if (refActiveElement.current === null) {
      return;
    }
    refActiveElement.current.classList.add('activePresent');
    (refActiveElement.current as HTMLImageElement).src = `./presents/${activePresent.type}.png`;
    refActiveElement.current.style.left = activePresent.x + 'px';
    refActiveElement.current.style.top = activePresent.y + 'px';
  }, [activePresent, refActiveElement]);
  return <>{activePresent.type !== -1 && <img alt="activepresent" ref={refActiveElement} />}</>;
};

export default ActivePresent;
