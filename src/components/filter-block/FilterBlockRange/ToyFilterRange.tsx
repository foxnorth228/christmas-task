import React from 'react';
import './ToyFilterRange.scss';
import Range from '../../Range/Range';

function ToyFilterRange() {
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
