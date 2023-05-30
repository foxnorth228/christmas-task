import React from 'react';
import './toyFilterShape.css';
import { IChangeToyFilter } from '../../../../pages/toyPage/toyPage';

const clicked = (el: boolean) => (el ? 'toyFilterShapeClicked' : 'greyBack');

function ToyFilterShape({ filter, changeToyFilter }: IChangeToyFilter) {
  const shapes = filter.shapes;
  return (
    <>
      <div className="toyFilterSector toyFilterSectorShape">
        <span className="toyFilterSectorShape__name">Форма:</span>
        <div className="toyFilterSectorShape__elems">
          <div
            className={`toyFilterSectorShape__elem toyFilterSectorShape__elem_ball ${clicked(
              shapes.ball
            )}`}
            onClick={() => {
              changeToyFilter('shapes', 'ball');
            }}
          ></div>
          <div
            className={`toyFilterSectorShape__elem toyFilterSectorShape__elem_bell ${clicked(
              shapes.bell
            )}`}
            onClick={() => {
              changeToyFilter('shapes', 'bell');
            }}
          ></div>
          <div
            className={`toyFilterSectorShape__elem toyFilterSectorShape__elem_cone ${clicked(
              shapes.cone
            )}`}
            onClick={() => {
              changeToyFilter('shapes', 'cone');
            }}
          ></div>
          <div
            className={`toyFilterSectorShape__elem toyFilterSectorShape__elem_snow ${clicked(
              shapes.snow
            )}`}
            onClick={() => {
              changeToyFilter('shapes', 'snow');
            }}
          ></div>
          <div
            className={`toyFilterSectorShape__elem toyFilterSectorShape__elem_toy ${clicked(
              shapes.toy
            )}`}
            onClick={() => {
              changeToyFilter('shapes', 'toy');
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default ToyFilterShape;
