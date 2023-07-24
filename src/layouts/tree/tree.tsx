import React from 'react';
import './tree.scss';
import useTree from '@hooks/use-tree';

const Tree = () => {
  const [tree] = useTree();
  return (
    <div style={{ backgroundImage: `url('./bg/${tree.bg}.jpg')` }} className="tree__bg">
      <div style={{ backgroundImage: `url('./tree/${tree.tree}.png')` }} className="tree"></div>
    </div>
  );
};

export default Tree;
