import React from 'react';
import './style.scss';
import useTree from '@hooks/use-tree';
import useTrees from '@hooks/useTrees';
import usePresents from '@hooks/usePresents';
import { useToysReset } from '@src/store/slices/toysSlice/hooks';

const TreeResetBlock = () => {
  const [, resetToys] = useToysReset();
  const [tree, setTree] = useTree();
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
          setTree({ type: 'RESET', payload: { value: 0 } });
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
