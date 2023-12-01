import React from 'react';
import './style.scss';
import { useToysReset } from '@src/store/slices/toysSlice/hooks';
import { useTreeReset } from '@src/store/slices/treeSlice/hooks';
import { useTreesSave } from '@src/store/slices/treesSlice/hooks';

const TreeResetBlock = () => {
  const [, resetToys] = useToysReset();
  const [tree, resetTree] = useTreeReset();
  const saveTrees = useTreesSave();
  return (
    <div className="treeResetBlock">
      <button onClick={() => saveTrees(tree)} className="treeResetBlock__reset">
        Сохранить
      </button>
      <button
        onClick={() => {
          resetTree();
          resetToys();
        }}
        className="treeResetBlock__reset"
      >
        Сбросить параметры
      </button>
    </div>
  );
};

export default TreeResetBlock;
