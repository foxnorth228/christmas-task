import React from 'react';
import { toy } from '../../../index.js';
import './cardList.css';
import { IFilter } from '../../main/Main.js';

const checkFilter = (filter: IFilter, elem: toy) => {
  let answer = 'none';
  const shapeValue = shape.find((el) => el[1] === elem.shape);
  const colorValue = color.find((el) => el[1] === elem.color);
  const sizeValue = size.find((el) => el[1] === elem.size);
  const favValue = elem.favorite;
  if (shapeValue && colorValue && sizeValue) {
    const isShape = Object.entries(filter.shapes).find((el) => el[0] === shapeValue[0]);
    const isColor = Object.entries(filter.colors).find((el) => el[0] === colorValue[0]);
    const isSize = Object.entries(filter.sizes).find((el) => el[0] === sizeValue[0]);
    const isFav = filter.fav.favorite;
    if (!(isShape && isColor && isSize && isFav)) {
      answer = 'flex';
    }
  }
  return answer;
};

export function createCards(data: toy[], filter: IFilter) {
  const elems: JSX.Element[] = [];
  for (const elem of data) {
    elems.push(
      <>
        <div className="card" style={{ display: checkFilter(filter, elem) }}>
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
      </>
    );
  }
  return elems;
}

const shape = [
  ['ball', 'шар'],
  ['bell', 'колокольчик'],
  ['cone', 'шишка'],
  ['snow', 'снежинка'],
  ['toy', 'фигурка'],
];

const color = [
  ['white', 'белый'],
  ['yellow', 'желтый'],
  ['red', 'красный'],
  ['blue', 'синий'],
  ['green', 'зелёный'],
];

const size = [
  ['big', 'большой'],
  ['medium', 'средний'],
  ['small', 'малый'],
];
