import React from 'react';
import './filter-reset-block.scss';

const FilterResetBlock = () => {
  return (
    <div>
      <button className="filterResetBlock__reset">Сбросить фильтры</button>
      <button className="filterResetBlock__reset">Сбросить настройки</button>
    </div>
  );
};

export default FilterResetBlock;
