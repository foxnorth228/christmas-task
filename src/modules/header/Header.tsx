import React from 'react';
import './header.css';
import { ChangePageFunc } from '../../index';

function Header({ changePage }: ChangePageFunc) {
  return (
    <>
      <header className="headerBody">
        <nav className="pageNav">
          <div className="startPageSelector">
            <div
              className="svgIcon startPageSwitch"
              onClick={() => {
                changePage(0);
              }}
            ></div>
          </div>
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
        </nav>
        <div className="toySearch"></div>
        <div className="favToyCount">
          <span className="favToyCounter">20</span>
        </div>
      </header>
    </>
  );
}

export default Header;
