import React from 'react';
import './filter-size.scss';
import FilterUnit from '@src/components/filter-block/filter-unit/filter-unit';
import useFilter from '@hooks/use-filter';
import clickIcon from '@src/utils/icons/clickIcon';
import { filterPositions } from '@contexts/filter-context';

const FilterSize = () => {
  const [filter, setFilter] = useFilter();
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
                setFilter({
                  type: 'CHANGE_BOOL_SECTION',
                  payload: { section: 'sizes', position: el[0] as filterPositions },
                });
              }}
            ></div>
          ))}
      </div>
    </FilterUnit>
  );
};

export default FilterSize;
