import React from 'react';
import { toy } from '../../../../..';
import './Card.scss';

function Card({ elem }: { elem: toy }) {
  return (
    <div key={elem.num} className="card">
      <p className="cardName">{elem.name}</p>
      <div style={{ display: 'flex' }}>
        <img className="cardImage" src={`./src/assets/toys/${elem.num}.png`}></img>
        <div className="cardDescription">
          <span className="cardDescriptionField">Количество: {elem.count}</span>
          <span className="cardDescriptionField">Год: {elem.year}</span>
          <span className="cardDescriptionField">Фигура: {elem.shape}</span>
          <span className="cardDescriptionField">Цвет: {elem.color}</span>
          <span className="cardDescriptionField">Размер: {elem.size}</span>
          <span className="cardDescriptionField">Любимое: {elem.favorite ? 'Да' : 'Нет'}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
