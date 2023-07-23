import React from 'react';
import './selector-bg.scss';
import useTree from "@hooks/useTree";

const SelectorBg = () => {
  const [tree, treeReducer] = useTree();
  const filenames = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  return (
    <div className="selectorBg">
      <h2 className="selectorBg__title">Выберите фон</h2>
      <div className="selectorBg__elements">
        {filenames.map((el, i) => (
          <div
            key={i}
            style={{
              backgroundImage: `url('./bg/${el}.jpg')`,
              borderColor: tree.bg === Number(el) ? '#ff5454' : '',
            }}
            onClick={() => {
              treeReducer({
                type: 'CHANGE_VALUE',
                payload: {
                  section: 'bg',
                  value: Number(el),
                }
              })
            }}
            className="selectorBg__element"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SelectorBg;
