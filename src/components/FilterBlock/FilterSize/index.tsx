import React from 'react';
import './style.scss';
import FilterUnit from '@components/FilterBlock/FilterUnit';
import clickIcon from '@src/utils/icons/clickIcon';
import { filterPositions } from '@store/slices/filterSlice/types';
import { useFilterChangeBool } from '@src/store/slices/filterSlice/hooks';

const FilterSize = () => {
  const [filter, setFilter] = useFilterChangeBool();
  const sizes = filter.sizes;
  return (
    <FilterUnit title="Размер">
      <div className="filterSize">
        {Object.entries(sizes)
          .sort()
          .map((el, i) => (
            <div
              key={i}
              className={`filterSize__elem filterSize__elem_${el[0]} ${
                el[1] ? 'iconSvg_clicked' : ''
              }`}
              onClick={(e) => {
                clickIcon(e.currentTarget);
                setFilter({ section: 'sizes', value: el[0] as filterPositions });
              }}
            ></div>
          ))}
      </div>
    </FilterUnit>
  );
};

export default FilterSize;
