import React from 'react';
import './selector-toys.scss';
import useTree from '@hooks/use-tree';

const SelectorToys = () => {
  const fileNames: number[] = [];
  for (let i = 0; i < 20; ++i) {
    fileNames.push(i + 1);
  }
  const [tree] = useTree();
  const array = tree.toys.length === 0 ? fileNames : tree.toys;
  return (
    <div className="selectorToys">
      <h2 className="selectorToys__title">Игрушки</h2>
      <div className="selectorToys__elements">
        {array.map((el) => (
          <div key={typeof el === 'number' ? el : el.type} className="selectorToys__element">
            <div
              style={{ backgroundImage: `url('./toys/${el}.png')` }}
              className="selectorToys__example"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectorToys;
