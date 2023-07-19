import React from 'react';
import { toy } from '@interfaces/toy';
import './card-list.css';
import { IFilter } from '@services/filterTypes';
import { data } from '@pages/app/app';
import Card from '@components/card/Card';
import useFilter from '@hooks/useFilter';

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

function CardList({ headerLink }: { headerLink: JSX.Element }) {
  const [filter] = useFilter();
  return (
    <div className="cardList">
      <div className="cardList__header">
        <h1 className="cardList__title">Игрушки</h1>
        {headerLink}
      </div>
      <div className="cardList__body">
        {filterCards(filter).map((el) => (
          <Card key={el.num} elem={el} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
