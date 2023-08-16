import React from 'react';
import './searcher.scss';
import useFilter from '@hooks/use-filter';

function Searcher() {
  const [filter, setFilter] = useFilter();
  return (
    <div className="searcher">
      <input
        value={filter.searchSample}
        type="text"
        placeholder="Поиск..."
        className="searcher__input"
        onChange={(e) => {
          console.log(filter.searchSample, e.target.value);
          setFilter({
            type: 'CHANGE_VALUE',
            payload: { section: 'searchSample', value: e.target.value },
          });
        }}
      />
      <div className="searcher__icon"></div>
    </div>
  );
}

export default Searcher;
