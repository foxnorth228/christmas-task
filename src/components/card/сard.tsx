import React from 'react';
import './card.scss';

import { toy } from '@interfaces/toy';
import { convertDataShape, convertDataColor, convertDataSize } from '@services/getData';
import useToys from '@hooks/use-toys';

function Card({ elem, isRender }: { elem: toy; isRender: boolean }) {
  const [, toysReducer] = useToys();
  const clickCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.classList.toggle('card_clicked');
    toysReducer({
      type: 'SELECTED',
      payload: elem.num,
    });
  };
  return (
    <div
      key={elem.num}
      onClick={clickCard}
      style={{ display: isRender ? 'flex' : 'none' }}
      className={`card ${elem.selected ? 'card_clicked' : ''}`}
    >
      <p className="card__name">{elem.name}</p>
      <img loading="lazy" className="card__image" src={`./toys/${elem.num}.webp`} alt="card-image"></img>
      <div className="card__descriptionBlock">
        <span className="card__property">Количество: {elem.count}</span>
        <span className="card__property">Год: {elem.year}</span>
        <span className="card__property">Фигура: {convertDataShape(elem.shape)}</span>
        <span className="card__property">Цвет: {convertDataColor(elem.color)}</span>
        <span className="card__property">Размер: {convertDataSize(elem.size)}</span>
      </div>
    </div>
  );
}

export default Card;
