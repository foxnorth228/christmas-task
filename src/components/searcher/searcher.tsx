import React from 'react';
import './searcher.scss';
import { useFilterChangeValue } from '@src/store/slices/filterSlice/hooks';

function Searcher() {
  const [filter, setFilter] = useFilterChangeValue();
  return (
    <div className="searcher">
      <input
        value={filter.searchSample}
        type="text"
        placeholder="Поиск..."
        className="searcher__input"
        onChange={(e) => {
          setFilter({ section: 'searchSample', value: e.target.value });
        }}
      />
      <div className="searcher__icon"></div>
    </div>
  );
}

export default Searcher;
