import React, { useCallback } from 'react';
import './style.scss';
import usePageLoaded from '@hooks/usePageLoaded';
import { useToysUpdate } from '@src/store/slices/toysSlice/hooks';
import { useTreeUpdate } from '@src/store/slices/treeSlice/hooks';
import { useTreesDelete } from '@src/store/slices/treesSlice/hooks';
import { ITree } from '@store/slices/treeSlice/types';

const SelectorDecoratedTree = () => {
  const isPageLoaded = usePageLoaded();
  const [, updateToys] = useToysUpdate();
  const [, updateTree] = useTreeUpdate();
  const [trees, deleteTrees] = useTreesDelete();

  const onClickUpdateTree = useCallback(
    (el: ITree) => {
      updateTree(el);
      updateToys(el.toys);
    },
    [updateToys, updateTree]
  );

  const onClickDeleteTree = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>, i: number) => {
      e.stopPropagation();
      deleteTrees(i);
    },
    []
  );
  return (
    <div className="selectorDecTree">
      <h2 className="treePage__title selectorDecTree__title">Вы нарядили</h2>
      <div className="selectorDecTree__elements">
        {trees.map((el, i) => (
          <div key={i} className="selectorDecTree__element" onClick={() => onClickUpdateTree(el)}>
            <div
              style={{
                display: isPageLoaded ? '' : 'none',
                backgroundImage: `url('./tree/${el.tree}.webp')`,
              }}
              className="selectorDecTree__example"
            ></div>
            <div onClick={(e) => onClickDeleteTree(e, i)} className="selectorDecTree__cross"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectorDecoratedTree;
