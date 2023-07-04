import React from 'react';
import './nav.scss';
import { ChangePageFunc } from '@pages/app/app';

function Nav({ changePage }: ChangePageFunc) {
  return (
    <>
      <nav className="pageNav">
        <div className="pageSelector pageSelector__icon">
          <div
            className="treeIcon startPageSwitch"
            onClick={() => {
              changePage(0);
            }}
          ></div>
        </div>
        <div className="pageSelector">
          <span
            className="textSwitch toyPageSwitch"
            onClick={() => {
              changePage(1);
            }}
          >
            Игрушки
          </span>
        </div>
        <div className="pageSelector">
          <span
            className="textSwitch"
            onClick={() => {
              changePage(2);
            }}
          >
            Ёлочка
          </span>
        </div>
      </nav>
    </>
  );
}

export default Nav;
