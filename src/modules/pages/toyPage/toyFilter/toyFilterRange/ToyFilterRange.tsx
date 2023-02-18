import React from 'react';
import { IChangeToyFilter } from '../../toyPage';

function ToyFilterRange({ filter, changeToyFilter }: IChangeToyFilter) {
  return (
    <>
      <div className="toyFiltersType toyFiltersRange">
        <span>Фильтры по </span>
        <div className="toyFilterRangeSecNumber">
          <span>Количество</span>
          <div className="toyFilterRangeNumber"></div>
        </div>
        <div className="toyFilterRangeSecYear">
          <span>Год</span>
          <div className="toyFilterRangeYear"></div>
        </div>
      </div>
    </>
  );
}

export default ToyFilterRange;
