import React from 'react';
import './toyPageSelector.scss';
import { ChangePageFunc } from '../../../..';

function ToyPageSelector({ changePage }: ChangePageFunc) {
  return (
    <div className="toyPageSelector">
      <span
        className="textSwitch toyPageSwitch"
        onClick={() => {
          changePage(1);
        }}
      >
        Игрушки
      </span>
    </div>
  );
}

export default ToyPageSelector;
