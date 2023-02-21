import React from 'react';
import './toyFilterShape.css';
import { IChangeToyFilter } from '../../../toyPage';

const clicked = (el: boolean) => (el ? 'toyFilterShapeClicked' : 'greyBack');

function ToyFilterShape({ filter, changeToyFilter }: IChangeToyFilter) {
  const shapes = filter.shapes;
  return (
    <>
      <div className="toyFiltersValueType toyFilterShape">
        <span className="toyFilterShapeName">Форма:</span>
        <div className="toyFilterShapeElems">
          <div
            className={`toyFilterShapeElem toyFilterShapeBall ${clicked(shapes.ball)}`}
            onClick={() => {
              changeToyFilter('shapes', 'ball');
            }}
          ></div>
          <div
            className={`toyFilterShapeElem toyFilterShapeBell ${clicked(shapes.bell)}`}
            onClick={() => {
              changeToyFilter('shapes', 'bell');
            }}
          ></div>
          <div
            className={`toyFilterShapeElem toyFilterShapeCone ${clicked(shapes.cone)}`}
            onClick={() => {
              changeToyFilter('shapes', 'cone');
            }}
          ></div>
          <div
            className={`toyFilterShapeElem toyFilterShapeSnow ${clicked(shapes.snow)}`}
            onClick={() => {
              changeToyFilter('shapes', 'snow');
            }}
          ></div>
          <div
            className={`toyFilterShapeElem toyFilterShapeToy ${clicked(shapes.toy)}`}
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
