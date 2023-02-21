import React from 'react';
import './toyFilterSize.css';
import { IChangeToyFilter } from '../../../toyPage';

const clicked = (el: boolean) => (el ? 'toyFilterSizeClicked' : 'greyBack');

function ToyFilterSize({ filter, changeToyFilter }: IChangeToyFilter) {
  const sizes = filter.sizes;
  return (
    <>
      <div className="toyFiltersValueType toyFilterSize">
        <span className="toyFilterSizeName">Размер:</span>
        <div className="toyFilterSizeElems">
          <div
            className={`toyFilterSizeElem toyFilterSizeBig ${clicked(sizes.big)}`}
            onClick={() => {
              changeToyFilter('sizes', 'big');
            }}
          ></div>
          <div
            className={`toyFilterSizeElem toyFilterSizeMedium ${clicked(sizes.medium)}`}
            onClick={() => {
              changeToyFilter('sizes', 'medium');
            }}
          ></div>
          <div
            className={`toyFilterSizeElem toyFilterSizeSmall ${clicked(sizes.small)}`}
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
