import React from 'react';
import './filter-reset-block.scss';
import useFilter from '@hooks/use-filter';
import { filterKeyWord } from '@contexts/filter-context';

const FilterResetBlock = () => {
  const [, setFilter] = useFilter();
  return (
    <div>
      <button
        onClick={() => setFilter({ type: 'RESET', payload: { section: 'sizes' } })}
        className="filterResetBlock__reset"
      >
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
