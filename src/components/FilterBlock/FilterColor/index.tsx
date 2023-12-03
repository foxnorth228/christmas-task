import React from 'react';
import './style.scss';
import FilterUnit from '@components/FilterBlock/FilterUnit';
import { filterPositions } from '@store/slices/filterSlice/types';
import { useFilterChangeBool } from '@src/store/slices/filterSlice/hooks';

const FilterColor = () => {
  const [filter, setFilter] = useFilterChangeBool();
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
              setFilter({ section: 'colors', value: el[0] as filterPositions });
            }}
          ></div>
        ))}
      </div>
    </FilterUnit>
  );
};

export default FilterColor;
