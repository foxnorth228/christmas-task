import React from 'react';
import './nav.scss';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav className="pageNav">
        <div className="pageSelector pageSelector__icon">
          <Link to="/start" replace={true} className="treeIcon startPageSwitch"></Link>
        </div>
        <div className="pageSelector">
          <Link to="/toys" replace={true} className="textSwitch toyPageSwitch">
            Игрушки
          </Link>
        </div>
        <div className="pageSelector">
          <Link to="/tree" replace={true} className="textSwitch">
            Ёлочка
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
