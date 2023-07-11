import React from 'react';
import './main.scss';
import { Outlet } from 'react-router';

function Main() {
  return (
    <>
      <main className="mainBody">{<Outlet />}</main>
    </>
  );
}

export default Main;
