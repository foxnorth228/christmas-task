import React from 'react';
import { toy } from '@interfaces/toy';
import { convertDataShape, convertDataColor, convertDataSize } from '@services/getData';
import './Card.scss';

function Card({ elem }: { elem: toy }) {
  return (
    <div key={elem.num} className="card">
      <p className="card_name">{elem.name}</p>
        <img className="card_image" src={`./toys/${elem.num}.png`}></img>
        <div className="card_descriptionBlock">
          <span className="card_property">Количество: {elem.count}</span>
          <span className="card_property">Год: {elem.year}</span>
          <span className="card_property">Фигура: {convertDataShape(elem.shape)}</span>
          <span className="card_property">Цвет: {convertDataColor(elem.color)}</span>
          <span className="card_property">Размер: {convertDataSize(elem.size)}</span>
          <span className="card_property">Любимое: {elem.favorite ? 'Да' : 'Нет'}</span>
        </div>
    </div>
  );
}

export default Card;
