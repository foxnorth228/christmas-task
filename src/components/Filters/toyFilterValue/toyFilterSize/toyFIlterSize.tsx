import React from 'react';
import './toyFilterSize.scss';
import { IChangeToyFilter } from '../../../../pages/toyPage/toyPage';
import clickIcon from '@src/services/icons/clickIcon';
import useFilter from '@src/hooks/useFilter';
import {
  filterPositions,
  filterSectionObject,
  filterSections,
} from '@src/components/cardList/filterTypes';
interface IFilterBlock {
  i: number;
  name: filterSections;
  obj: filterSectionObject;
}
function FilterBlock({ name, obj, i }: IFilterBlock) {
  const nameCap = name.charAt(0).toUpperCase() + name.slice(1);
  const [, filterReducer] = useFilter();
  const sectorNames = ['Форма', 'Цвет', 'Размер', 'Любимая'];
  return (
    <section className={`FilterSector FilterSector${nameCap}`}>
      <span className={`FilterSector${nameCap}__name`}>{sectorNames[i]}:</span>
      <div className={`FilterSector${nameCap}__elems`}>
        {Object.keys(obj)
          .sort()
          .map((el, i) => (
            <div
              key={i}
              className={`FilterSector${nameCap}__elem FilterSector${nameCap}__elem_${el}`}
              onClick={(e) => {
                clickIcon(e.currentTarget);
                filterReducer(name, el as filterPositions);
              }}
            ></div>
          ))}
      </div>
    </section>
  );
}

export default FilterBlock;
