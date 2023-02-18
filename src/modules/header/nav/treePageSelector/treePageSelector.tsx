import React from 'react';
import './treePageSelector.scss';
import { ChangePageFunc } from '../../../..';

function TreePageSelector({ changePage }: ChangePageFunc) {
  return (
    <div className="treePageSelector">
      <span
        className="textSwitch treePageSwitch"
        onClick={() => {
          changePage(2);
        }}
      >
        Ёлочка
      </span>
    </div>
  );
}

export default TreePageSelector;
