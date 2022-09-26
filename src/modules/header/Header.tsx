import React from 'react';
import './header.css';

function Header() {
  return (
    <>
      <header className="headerBody">
        <nav className="pageNav">
          <div className="startPageSelector">
            <div className="svgIcon startPageSwitch"></div>
          </div>
          <div className="toyPageSelector">
            <span className="textSwitch toyPageSwitch">Игрушки</span>
          </div>
          <div className="treePageSelector">
            <span className="textSwitch treePageSwitch">Ёлочка</span>
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
