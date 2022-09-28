import React from 'react';
import './startPage.css';
import { ChangePageFunc } from '../../../index';

function StartPage({ changePage }: ChangePageFunc) {
  return (
    <>
      <div className="page startPage">
        <div className="startPageElems">
          <img src="./src/assets/ball/1.png" className="startPageToy"></img>
          <span className="startPageText">{'Новогодняя игра "Наряди ёлку"'}</span>
          <button
            className="startPageButton"
            onClick={() => {
              changePage(1);
            }}
          >
            Начать
          </button>
          <img src="./src/assets/ball/2.png" className="startPageToy2"></img>
        </div>
      </div>
    </>
  );
}

export default StartPage;
