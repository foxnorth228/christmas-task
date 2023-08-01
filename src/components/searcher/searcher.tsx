import React from 'react';
import './searcher.scss';
import useFilter from '@hooks/use-filter';

function Searcher() {
  const [, setFilter] = useFilter();
  return (
    <div className="searcher">
      <input
        type="text"
        placeholder="Поиск..."
        className="searcher__input"
        onChange={(e) => {
          setFilter({
            type: 'CHANGE_VALUE',
            payload: { section: 'searchSample', value: e.currentTarget.value },
          });
        }}
      />
      <div className="searcher__icon"></div>
    </div>
  );
}

export default Searcher;
