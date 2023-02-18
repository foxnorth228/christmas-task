import React from 'react';
import { toy } from '../../../index.js';
import './cardList.css';
import { IFilter } from '../../main/Main.js';

const checkFilter = (filter: IFilter, elem: toy) => {
  let answer = 'none';
  const allFilterShapesOff = Object.values(filter.shapes).some((el) => el);
  const allFilterColorsOff = Object.values(filter.colors).some((el) => el);
  const allFilterSizesOff = Object.values(filter.sizes).some((el) => el);
  const shapeEngValue = shape.find((el) => el[1] === elem.shape);
  const colorEngValue = color.find((el) => el[1] === elem.color);
  const sizeEngValue = size.find((el) => el[1] === elem.size);
  const favValue = elem.favorite;
  if (shapeEngValue && colorEngValue && sizeEngValue) {
    const isShapeOn = Object.entries(filter.shapes).find((el) => el[0] === shapeEngValue[0]);
    const isColorOn = Object.entries(filter.colors).find((el) => el[0] === colorEngValue[0]);
    const isSizeOn = Object.entries(filter.sizes).find((el) => el[0] === sizeEngValue[0]);
    const isFavOn = filter.fav.favorite;
    console.log(isShapeOn, isColorOn, isSizeOn, allFilterShapesOff);
    if (isShapeOn && isColorOn && isSizeOn) {
      if (
        (isShapeOn[1] || !allFilterShapesOff) &&
        (isColorOn[1] || !allFilterColorsOff) &&
        (isSizeOn[1] || !allFilterSizesOff)
      ) {
        answer = 'flex';
      }
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
