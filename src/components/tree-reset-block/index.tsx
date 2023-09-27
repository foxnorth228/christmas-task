import React from 'react';
import './style.scss';
import useTree from "@hooks/use-tree";
import useToys from "@hooks/use-toys";

const TreeResetBlock = () => {
  const [, setToys] = useToys();
  const [, setTree] = useTree();
  return (
    <div>
      <button className="treeResetBlock__reset">Сохранить</button>
      <button
        onClick={() => {
          setTree({ type: 'RESET', payload: { value: 0 } });
          setToys({ type: 'RESET', payload: 0 })
        }}
        className="treeResetBlock__reset"
      >
        Сбросить параметры
      </button>
    </div>
  )
};

export default TreeResetBlock;
