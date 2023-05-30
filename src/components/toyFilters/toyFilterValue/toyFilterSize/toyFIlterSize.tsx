import React from 'react';
import './toyFilterSize.scss';
import { IChangeToyFilter } from '../../../../pages/toyPage/toyPage';
import clickIcon from '@src/services/icons/clickIcon';

function ToyFilterSize({ filter, changeToyFilter }: IChangeToyFilter) {
  return (
    <>
      <div className="toyFilterSector toyFilterSectorSize">
        <span className="toyFilterSectorSize__name">Размер:</span>
        <div className="toyFilterSectorSize__elems">
          <div
            className={`toyFilterSectorSize__elem toyFilterSectorSize__elem_big`}
            onClick={(e) => {
              clickIcon(e.currentTarget);
              changeToyFilter('sizes', 'big');
            }}
          ></div>
          <div
            className={`toyFilterSectorSize__elem toyFilterSectorSize__elem_medium`}
            onClick={(e) => {
              clickIcon(e.currentTarget);
              changeToyFilter('sizes', 'medium');
            }}
          ></div>
          <div
            className={`toyFilterSectorSize__elem toyFilterSectorSize__elem_small`}
            onClick={(e) => {
              clickIcon(e.currentTarget);
              changeToyFilter('sizes', 'small');
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default ToyFilterSize;
