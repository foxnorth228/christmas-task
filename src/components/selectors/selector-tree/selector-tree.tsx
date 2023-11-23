import React from 'react';
import './selector-tree.scss';
import useTree from '@hooks/use-tree';
import usePageLoaded from '@hooks/usePageLoaded';

const SelectorTree = () => {
  const isPageLoaded = usePageLoaded();
  const [tree, treeReducer] = useTree();
  const fileNames = ['1', '2', '3', '4', '5', '6'];
  return (
    <div className="selectorTree">
      <h2 className="treePage__title selectorTree__title">Выберите ёлочку</h2>
      <div className="selectorTree__elements">
        {fileNames.map((el, i) => (
          <div
            key={i}
            className="selectorTree__element"
            onClick={() => {
              treeReducer({
                type: 'CHANGE_VALUE',
                payload: {
                  section: 'tree',
                  value: Number(el),
                },
              });
            }}
          >
            <div
              style={{
                display: isPageLoaded ? '' : 'none',
                backgroundImage: `url("./tree/${el}.webp")`,
                filter: tree.tree === Number(el) ? 'drop-shadow(0px 0px 20px #FF0)' : '',
              }}
              className="selectorTree__example"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectorTree;
