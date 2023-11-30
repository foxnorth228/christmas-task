import React from 'react';
import './style.scss';
import useTrees from '@hooks/useTrees';
import usePresents from '@hooks/usePresents';
import { useToysReset } from '@src/store/slices/toysSlice/hooks';
import { useTreeReset } from '@src/store/slices/treeSlice/hooks';

const TreeResetBlock = () => {
  const [, resetToys] = useToysReset();
  const [tree, resetTree] = useTreeReset();
  const [, setTrees] = useTrees();
  const [, setPresents] = usePresents();
  return (
    <div className="treeResetBlock">
      <button
        onClick={() => setTrees({ type: 'SAVE', payload: tree })}
        className="treeResetBlock__reset"
      >
        Сохранить
      </button>
      <button
        onClick={() => {
          resetTree();
          resetToys();
          setPresents({ type: 'RESET', payload: 0 });
        }}
        className="treeResetBlock__reset"
      >
        Сбросить параметры
      </button>
    </div>
  );
};

export default TreeResetBlock;
