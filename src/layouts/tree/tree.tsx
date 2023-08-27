import React from 'react';
import './tree.scss';
import useTree from '@hooks/use-tree';

const Tree = () => {
  const [tree, setTree] = useTree();
  return (
    <div style={{ backgroundImage: `url('./bg/${tree.bg}.jpg')` }} className="tree__bg">
      <img
        width="500px"
        height="714px"
        src={`./tree/${tree.tree}.png`}
        className="tree"
        alt="tree"
      ></img>
      <svg
        id="eHKqEiOVgRr1"
        className="tree__toysArea"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 500 714"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
      >
        <path
          className="tree__toysArea_path"
          d="M 250 10, L 20 580 L 65 650 L 200 700 H 380 L 450 665 L 480 580 Z"
          stroke="#3f5787"
          strokeWidth="5"
          fill="#00000000"
        />
      </svg>
    </div>
  );
};

export default Tree;
