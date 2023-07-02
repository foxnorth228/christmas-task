import React from 'react';
import './startPage.css';
import '../page.scss';
import { ChangePageFunc } from '../../index';

function StartPage({ changePage }: ChangePageFunc) {
  return (
    <div className="page startPage">
      <div className="startPage__elems">
        <img src="./ball/1.png" className="startPage__firstToy"></img>
        <span className="startPage__text">{'Новогодняя игра "Наряди ёлку"'}</span>
        <button
          className="startPage__button"
          onClick={() => {
            changePage(1);
          }}
        >
          Начать
        </button>
        <img src="./ball/2.png" className="startPage__secondToy"></img>
      </div>
    </div>
  );
}

export default StartPage;
