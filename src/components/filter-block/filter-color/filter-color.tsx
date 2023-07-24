import React from 'react';
import './filter-color.scss';
import FilterUnit from '../filter-unit/filter-unit';
import useFilter from '@hooks/use-filter';
import { filterPositions } from '@utils/filterTypes';

const FilterColor = () => {
  const [filter, setFilter] = useFilter();
  const colors = filter.colors;
  return (
    <FilterUnit title="Цвет">
      <div className="filterColor">
        {Object.keys(colors).map((el, i) => (
          <div
            key={i}
            className={`filterColor__elem filterColor__elem_${el}`}
            onClick={(e) => {
              e.currentTarget.classList.toggle('filterColor_clicked');
              setFilter({ section: 'colors', position: el as filterPositions });
            }}
          ></div>
        ))}
      </div>
    </FilterUnit>
  );
};

export default FilterColor;
