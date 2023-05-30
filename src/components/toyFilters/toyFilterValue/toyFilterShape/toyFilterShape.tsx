import React from 'react';
import './toyFilterShape.scss';
import clickIcon from '@src/services/icons/clickIcon';
import { IChangeToyFilter } from '../../../../pages/toyPage/toyPage';

function ToyFilterShape({ filter, changeToyFilter }: IChangeToyFilter) {
  return (
    <>
      <div className="toyFilterSector toyFilterSectorShape">
        <span className="toyFilterSectorShape__name">Форма:</span>
        <div className="toyFilterSectorShape__elems">
          <div
            className={`toyFilterSectorShape__elem toyFilterSectorShape__elem_ball`}
            onClick={(e) => {
              clickIcon(e.currentTarget);
              changeToyFilter('shapes', 'ball');
            }}
          ></div>
          <div
            className={`toyFilterSectorShape__elem toyFilterSectorShape__elem_bell`}
            onClick={(e) => {
              clickIcon(e.currentTarget);
              changeToyFilter('shapes', 'bell');
            }}
          ></div>
          <div
            className={`toyFilterSectorShape__elem toyFilterSectorShape__elem_cone`}
            onClick={(e) => {
              clickIcon(e.currentTarget);
              changeToyFilter('shapes', 'cone');
            }}
          ></div>
          <div
            className={`toyFilterSectorShape__elem toyFilterSectorShape__elem_snow`}
            onClick={(e) => {
              clickIcon(e.currentTarget);
              changeToyFilter('shapes', 'snow');
            }}
          ></div>
          <div
            className={`toyFilterSectorShape__elem toyFilterSectorShape__elem_toy`}
            onClick={(e) => {
              clickIcon(e.currentTarget);
              changeToyFilter('shapes', 'toy');
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default ToyFilterShape;
