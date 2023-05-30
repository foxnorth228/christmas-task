import React from 'react';
import './startPageSelector.scss';
import { ChangePageFunc } from '../../..';

function StartPageSelector({ changePage }: ChangePageFunc) {
  return (
    <div className="startPageSelector">
      <div
        className="svgIcon startPageSwitch"
        onClick={() => {
          changePage(0);
        }}
      ></div>
    </div>
  );
}

export default StartPageSelector;
