import React from 'react';
import './filter-size.scss';
import FilterUnit from '@src/components/filter-block/filter-unit/filter-unit';
import useFilter from '@src/hooks/useFilter';
import clickIcon from '@src/services/icons/clickIcon';
import { filterPositions } from '@src/services/filterTypes';

const FilterSize = () => {
  const [filter, setFilter] = useFilter();
  const sizes = filter.sizes;
  return (
    <FilterUnit title="Размер">
      <div className="filterSize">
        {Object.keys(sizes)
          .sort()
          .map((el, i) => (
            <div
              key={i}
              className={`filterSize__elem filterSize__elem_${el}`}
              onClick={(e) => {
                clickIcon(e.currentTarget);
                setFilter({ section: 'sizes', position: el as filterPositions });
              }}
            ></div>
          ))}
      </div>
    </FilterUnit>
  );
};

export default FilterSize;
