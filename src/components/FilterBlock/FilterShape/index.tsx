import React from 'react';
import './style.scss';
import FilterUnit from '@components/FilterBlock/FilterUnit';
import clickIcon from '@src/utils/icons/clickIcon';
import { filterPositions } from '@store/slices/filterSlice/types';
import { useFilterChangeBool } from '@src/store/slices/filterSlice/hooks';

const FilterShape = () => {
  const [filter, setFilter] = useFilterChangeBool();
  const shapes = filter.shapes;
  return (
    <FilterUnit title="Форма">
      <div className="filterShape">
        {Object.entries(shapes)
          .sort()
          .map((el, i) => (
            <div
              key={i}
              className={`filterShape__elem filterShape__elem_${el[0]} ${
                el[1] ? 'iconSvg_clicked' : ''
              }`}
              onClick={(e) => {
                clickIcon(e.currentTarget);
                setFilter({ section: 'shapes', value: el[0] as filterPositions });
              }}
            ></div>
          ))}
      </div>
    </FilterUnit>
  );
};

export default FilterShape;
