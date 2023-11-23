import React from 'react';
import './style.scss';
import useTree from '@hooks/use-tree';
import usePageLoaded from '@hooks/usePageLoaded';

const SelectorStar = () => {
  const isPageLoaded = usePageLoaded();
  const [tree, treeReducer] = useTree();
  return (
    <div className="selectorStar">
      <h2 className="treePage__title ">Выберите звезду</h2>
      <div className="selectorStar__elements">
        {new Array(12).fill(0).map((_, i) => (
          <div
            key={i}
            className="selectorStar__element"
            onClick={() => {
              treeReducer({
                type: 'CHANGE_VALUE',
                payload: {
                  section: 'star',
                  value: Number(i + 1),
                },
              });
            }}
          >
            <div
              style={{
                display: isPageLoaded ? '' : 'none',
                backgroundImage: `url("./stars/${i + 1}.webp")`,
                filter: tree.star === Number(i + 1) ? 'drop-shadow(0px 0px 10px blue)' : '',
              }}
              className="selectorStar__example"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectorStar;
