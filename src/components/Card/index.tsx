import React, { useCallback } from 'react';
import './style.scss';
import { ICard } from './types';
import { convertDataShape, convertDataColor, convertDataSize } from '@services/getData';
import config from './config';

function Card({
  elem: { num, selected, name, count, year, shape, color, size },
  isRender,
  selectToy,
}: ICard) {
  const onClick = useCallback(() => {
    selectToy(num);
  }, [num, selectToy]);
  return (
    <div
      key={num}
      onClick={onClick}
      style={{ display: isRender ? 'flex' : 'none' }}
      className={`card ${selected ? 'card_clicked' : ''}`}
    >
      <p className="card__name">{name}</p>
      <img loading="lazy" className="card__image" src={`./toys/${num}.webp`} alt="card-image" />
      <div className="card__descriptionBlock">
        <span className="card__property">{`${config.count}: ${count}`}</span>
        <span className="card__property">{`${config.year}: ${year}`}</span>
        <span className="card__property">{`${config.shape}: ${convertDataShape(shape)}`}</span>
        <span className="card__property">{`${config.color}: ${convertDataColor(color)}`}</span>
        <span className="card__property">{`${config.size}: ${convertDataSize(size)}`}</span>
      </div>
    </div>
  );
}

export default Card;
