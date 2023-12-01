import React from 'react';
import './filter-reset-block.scss';
import { filterKeyWord } from '@store/slices/filterSlice';
import { useFilterReset } from '@store/slices/filterSlice/hooks';

const FilterResetBlock = () => {
  const [, setFilter] = useFilterReset();
  return (
    <div className="filterResetBlock">
      <button onClick={() => setFilter()} className="filterResetBlock__reset">
        Сбросить фильтры
      </button>
      <button
        onClick={() => localStorage.removeItem(filterKeyWord)}
        className="filterResetBlock__reset"
      >
        Сбросить настройки
      </button>
    </div>
  );
};

export default FilterResetBlock;
