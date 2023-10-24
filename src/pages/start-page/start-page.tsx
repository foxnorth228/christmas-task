import React from 'react';
import './start-page.scss';
import { useNavigate } from 'react-router';
import Firework from '@layouts/Firework';

function StartPage() {
  const navigate = useNavigate();
  return (
    <section className="page startPage">
      <Firework />
      <div className="startPage__contentBlock">
        <div className="startPage__imageBlock startPage__imageBlock_first">
          <img src="./ball/1.png" className="startPage__toy startPage__toy_first"></img>
        </div>
        <div className="startPage__titleBlock">
          <h1 className="startPage__title">Помогите бабушке нарядить ёлку</h1>
        </div>
        <div className="startPage__imageBlock startPage__imageBlock_second">
          <img src="./ball/2.png" className="startPage__toy startPage__toy_second"></img>
        </div>
      </div>
      <button
        className="startPage__startButton"
        onClick={() => navigate('/toys', { replace: true })}
      >
        Начать
      </button>
    </section>
  );
}

export default StartPage;
