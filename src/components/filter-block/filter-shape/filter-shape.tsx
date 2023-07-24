import React from 'react';
import './filter-shape.scss';
import FilterUnit from '@src/components/filter-block/filter-unit/filter-unit';
import useFilter from '@hooks/use-filter';
import clickIcon from '@src/utils/icons/clickIcon';
import { filterPositions } from '@utils/filterTypes';

const FilterShape = () => {
  const [filter, setFilter] = useFilter();
  const shapes = filter.shapes;
  return (
    <FilterUnit title="Форма">
      <div className="filterShape">
        {Object.keys(shapes)
          .sort()
          .map((el, i) => (
            <div
              key={i}
              className={`filterShape__elem filterShape__elem_${el}`}
              onClick={(e) => {
                clickIcon(e.currentTarget);
                setFilter({ section: 'shapes', position: el as filterPositions });
              }}
            ></div>
          ))}
      </div>
    </FilterUnit>
  );
};

export default FilterShape;
