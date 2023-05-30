import React from 'react';
import { toy } from '../../../index.js';
import './cardList.css';
import { IFilter } from './filterTypes';
import { data } from '../../../index';
import Card from './card/Card';

function filterCards(filter: IFilter) {
  const isAllFilterShapesOff = Object.values(filter.shapes).some((el) => el);
  const isAllFilterColorsOff = Object.values(filter.colors).some((el) => el);
  const isAllFilterSizesOff = Object.values(filter.sizes).some((el) => el);
  //const favValue = elem.favorite;

  const shapes = Object.entries(filter.shapes);
  const colors = Object.entries(filter.colors);
  const sizes = Object.entries(filter.sizes);

  function checkFilter(elem: toy) {
    let answer = false;
    const isShapeOn = shapes.find((el) => el[0] === elem.shape);
    const isColorOn = colors.find((el) => el[0] === elem.color);
    const isSizeOn = sizes.find((el) => el[0] === elem.size);
    //const isFavOn = filter.fav.favorite;

    if (isShapeOn && isColorOn && isSizeOn) {
      if (
        (isShapeOn[1] || !isAllFilterShapesOff) &&
        (isColorOn[1] || !isAllFilterColorsOff) &&
        (isSizeOn[1] || !isAllFilterSizesOff)
      ) {
        answer = true;
      }
    }
    return answer;
  }

  return data.filter((el) => checkFilter(el));
}

export function CardList({ filter }: { filter: IFilter }) {
  return (
    <div className="cardList">
      {filterCards(filter).map((el) => (
        <Card key={el.num} elem={el} />
      ))}
    </div>
  );
}
