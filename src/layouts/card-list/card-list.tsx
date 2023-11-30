import React from 'react';
import { toy } from '@interfaces/toy';
import './card-list.scss';
import { IFilter } from '@contexts/filter-context';
import Card from '@components/card/сard';
import useFilter from '@hooks/use-filter';
import { useToysSelect } from '@src/store/slices/toysSlice/hooks';

function sortCards(filter: IFilter, data: toy[]) {
  const collator = Intl.Collator('ru');
  const functions = [
    (a: toy, b: toy) => collator.compare(a.name, b.name),
    (a: toy, b: toy) => collator.compare(b.name, a.name),
    (a: toy, b: toy) => a.count - b.count,
    (a: toy, b: toy) => b.count - a.count,
  ];
  const newData = [...data];
  return newData.sort(functions[filter.sort]);
}

function filterCards(filter: IFilter, data: toy[]) {
  const isAllFilterShapesOff = Object.values(filter.shapes).some((el) => el);
  const isAllFilterColorsOff = Object.values(filter.colors).some((el) => el);
  const isAllFilterSizesOff = Object.values(filter.sizes).some((el) => el);
  //const favValue = elem.favorite;

  const shapes = Object.entries(filter.shapes);
  const colors = Object.entries(filter.colors);
  const sizes = Object.entries(filter.sizes);

  function checkFilter(elem: toy) {
    let answer = false;
    const matchWord = filter.searchSample;
    if (matchWord !== '' && !elem.name.match(new RegExp(matchWord, 'i'))) {
      return answer;
    }
    const isShapeOn = shapes.find((el) => el[0] === elem.shape);
    const isColorOn = colors.find((el) => el[0] === elem.color);
    const isSizeOn = sizes.find((el) => el[0] === elem.size);
    //const isFavOn = filter.fav.favorite;
    if (isShapeOn && isColorOn && isSizeOn) {
      if (
        (isShapeOn[1] || !isAllFilterShapesOff) &&
        (isColorOn[1] || !isAllFilterColorsOff) &&
        (isSizeOn[1] || !isAllFilterSizesOff) &&
        filter.rangeNum.left <= elem.count &&
        elem.count <= filter.rangeNum.right &&
        filter.rangeYear.left <= elem.year &&
        elem.year <= filter.rangeYear.right
      ) {
        answer = true;
      }
    }
    return answer;
  }

  return data.map((el) => {
    return [el, checkFilter(el)] as [toy, boolean];
  });
}

function CardList({ headerLink }: { headerLink: JSX.Element }) {
  const [toys, selectToy] = useToysSelect();
  const [filter] = useFilter();
  return (
    <div className="cardList">
      <div className="cardList__header">
        <h1 className="cardList__title">Игрушки</h1>
        {headerLink}
      </div>
      <div className="cardList__body">
        {filterCards(filter, sortCards(filter, toys)).map((el) => (
          <Card key={el[0].num} elem={el[0]} isRender={el[1]} selectToy={selectToy} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
