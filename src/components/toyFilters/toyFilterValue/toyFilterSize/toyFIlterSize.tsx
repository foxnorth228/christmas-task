import React from 'react';
import './toyFilterSize.css';
import { IChangeToyFilter } from '../../../../pages/toyPage/toyPage';

const clicked = (el: boolean) => (el ? 'toyFilterSizeClicked' : 'greyBack');

function ToyFilterSize({ filter, changeToyFilter }: IChangeToyFilter) {
  const sizes = filter.sizes;
  return (
    <>
      <div className="toyFilterSector toyFilterSectorSize">
        <span className="toyFilterSectorSize__name">Размер:</span>
        <div className="toyFilterSectorSize__elems">
          <div
            className={`toyFilterSectorSize__elem toyFilterSectorSize__elem_big ${clicked(
              sizes.big
            )}`}
            onClick={() => {
              changeToyFilter('sizes', 'big');
            }}
          ></div>
          <div
            className={`toyFilterSectorSize__elem toyFilterSectorSize__elem_medium ${clicked(
              sizes.medium
            )}`}
            onClick={() => {
              changeToyFilter('sizes', 'medium');
            }}
          ></div>
          <div
            className={`toyFilterSectorSize__elem toyFilterSectorSize__elem_small ${clicked(
              sizes.small
            )}`}
            onClick={() => {
              changeToyFilter('sizes', 'small');
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default ToyFilterSize;
