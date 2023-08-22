import React from 'react';
import './filter-color.scss';
import FilterUnit from '../filter-unit/filter-unit';
import useFilter from '@hooks/use-filter';
import { filterPositions } from '@contexts/filter-context';

const FilterColor = () => {
  const [filter, setFilter] = useFilter();
  const colors = filter.colors;
  return (
    <FilterUnit title="Цвет">
      <div className="filterColor">
        {Object.entries(colors).map((el, i) => (
          <div
            key={i}
            className={`filterColor__elem filterColor__elem_${el[0]} ${
              el[1] ? 'filterColor_clicked' : ''
            }`}
            onClick={(e) => {
              e.currentTarget.classList.toggle('filterColor_clicked');
              setFilter({
                type: 'CHANGE_BOOL_SECTION',
                payload: { section: 'colors', position: el[0] as filterPositions },
              });
            }}
          ></div>
        ))}
      </div>
    </FilterUnit>
  );
};

export default FilterColor;
