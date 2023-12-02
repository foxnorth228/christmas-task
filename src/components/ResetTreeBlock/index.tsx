import React, { useCallback } from 'react';
import './style.scss';
import { useToysReset } from '@src/store/slices/toysSlice/hooks';
import { useTreeReset } from '@src/store/slices/treeSlice/hooks';
import { useTreesSave } from '@src/store/slices/treesSlice/hooks';

const TreeResetBlock = () => {
  const [, resetToys] = useToysReset();
  const [tree, resetTree] = useTreeReset();
  const saveTrees = useTreesSave();

  const onClickSaveTree = useCallback(() => {
    saveTrees(tree);
  }, [saveTrees, tree]);

  const onClickReset = useCallback(() => {
    resetTree();
    resetToys();
  }, [resetToys, resetTree]);
  return (
    <div className="treeResetBlock">
      <button onClick={onClickSaveTree} className="treeResetBlock__reset">
        Сохранить
      </button>
      <button onClick={onClickReset} className="treeResetBlock__reset">
        Сбросить параметры
      </button>
    </div>
  );
};

export default TreeResetBlock;
