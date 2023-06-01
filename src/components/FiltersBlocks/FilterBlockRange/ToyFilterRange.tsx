import React from 'react';
import './ToyFilterRange.scss';
import { IChangeToyFilter } from '../../../pages/toyPage/toyPage';
import Range from '../../Range/Range';

function ToyFilterRange({ filter, changeToyFilter }: IChangeToyFilter) {
  const numberParams = {
    leftPos: 1,
    rightPos: 12,
    step: 1,
  };
  const ageParams = {
    leftPos: 1940,
    rightPos: 2020,
    step: 10,
  };
  return (
    <>
      <div className="toyFilterUnit toyFilterUnitRange">
        <span className="toyFilterUnitRange__name">Фильтры по диапазону</span>
        <div className="toyFilterRSector toyFilterRangeNumber">
          <span className="toyFilterRangeNumber__name">Количество</span>
          <div className="toyFilterRangeNumber__range">
            <Range params={numberParams} />
          </div>
        </div>
        <div className="toyFilterRSector toyFilterRangeYear">
          <span>Год</span>
          <div className="toyFilterRangeYear__range">
            <Range params={ageParams} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ToyFilterRange;
