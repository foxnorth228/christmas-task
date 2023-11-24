import React from 'react';
import './card.scss';

import { toy } from '@interfaces/toy';
import { convertDataShape, convertDataColor, convertDataSize } from '@services/getData';
interface ICard {
  elem: toy;
  isRender: boolean;
  selectToy: (num: number) => unknown;
}

function Card({
  elem: { num, selected, name, count, year, shape, color, size },
  isRender,
  selectToy,
}: ICard) {
  return (
    <div
      key={num}
      onClick={() => selectToy(num)}
      style={{ display: isRender ? 'flex' : 'none' }}
      className={`card ${selected ? 'card_clicked' : ''}`}
    >
      <p className="card__name">{name}</p>
      <img loading="lazy" className="card__image" src={`./toys/${num}.webp`} alt="card-image" />
      <div className="card__descriptionBlock">
        <span className="card__property">Количество: {count}</span>
        <span className="card__property">Год: {year}</span>
        <span className="card__property">Фигура: {convertDataShape(shape)}</span>
        <span className="card__property">Цвет: {convertDataColor(color)}</span>
        <span className="card__property">Размер: {convertDataSize(size)}</span>
      </div>
    </div>
  );
}

export default Card;
