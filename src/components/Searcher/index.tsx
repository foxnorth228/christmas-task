import React, { useCallback } from 'react';
import './style.scss';
import { useFilterChangeValue } from '@src/store/slices/filterSlice/hooks';

function Searcher() {
  const [filter, setFilter] = useFilterChangeValue();

  const onChangeSample = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilter({ section: 'searchSample', value: e.target.value });
    },
    [setFilter]
  );
  return (
    <div className="searcher">
      <input
        value={filter.searchSample}
        type="text"
        placeholder="Поиск..."
        className="searcher__input"
        onChange={onChangeSample}
      />
      <div className="searcher__icon"></div>
    </div>
  );
}

export default Searcher;
