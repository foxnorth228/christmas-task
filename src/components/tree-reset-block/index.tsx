import React from 'react';
import './style.scss';
import useTree from '@hooks/use-tree';
import useToys from '@hooks/use-toys';
import useTrees from '@hooks/useTrees';

const TreeResetBlock = () => {
  const [, setToys] = useToys();
  const [tree, setTree] = useTree();
  const [trees, setTrees] = useTrees();
  console.log('tr', trees);
  return (
    <div>
      <button
        onClick={() => setTrees({ type: 'SAVE', payload: tree })}
        className="treeResetBlock__reset"
      >
        Сохранить
      </button>
      <button
        onClick={() => {
          setTree({ type: 'RESET', payload: { value: 0 } });
          setToys({ type: 'RESET', payload: 0 });
        }}
        className="treeResetBlock__reset"
      >
        Сбросить параметры
      </button>
    </div>
  );
};

export default TreeResetBlock;
