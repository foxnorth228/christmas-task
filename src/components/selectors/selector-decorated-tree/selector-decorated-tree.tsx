import React from 'react';
import './selector-decorated-tree.scss';
import usePageLoaded from '@hooks/usePageLoaded';
import { useToysUpdate } from '@src/store/slices/toysSlice/hooks';
import { useTreeUpdate } from '@src/store/slices/treeSlice/hooks';
import { useTreesDelete } from '@src/store/slices/treesSlice/hooks';

const SelectorDecoratedTree = () => {
  const isPageLoaded = usePageLoaded();
  const [, updateToys] = useToysUpdate();
  const [, updateTree] = useTreeUpdate();
  const [trees, deleteTrees] = useTreesDelete();
  return (
    <div className="selectorDecTree">
      <h2 className="treePage__title selectorDecTree__title">Вы нарядили</h2>
      <div className="selectorDecTree__elements">
        {trees.map((el, i) => (
          <div
            key={i}
            className="selectorDecTree__element"
            onClick={() => {
              updateTree(el);
              updateToys(el.toys);
            }}
          >
            <div
              style={{
                display: isPageLoaded ? '' : 'none',
                backgroundImage: `url('./tree/${el.tree}.webp')`,
              }}
              className="selectorDecTree__example"
            ></div>
            <div
              onClick={(e) => {
                e.stopPropagation();
                deleteTrees(i);
              }}
              className="selectorDecTree__cross"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectorDecoratedTree;
