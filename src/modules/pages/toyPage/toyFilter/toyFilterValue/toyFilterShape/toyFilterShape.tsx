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
              changeToyFilter({ type: 'shapes', elem: 'ball' });
            }}
          ></div>
          <div
            className={`toyFilterShapeElem toyFilterShapeBell ${clicked(shapes.bell)}`}
            onClick={() => {
              changeToyFilter({ type: 'shapes', elem: 'bell' });
            }}
          ></div>
          <div
            className={`toyFilterShapeElem toyFilterShapeCone ${clicked(shapes.cone)}`}
            onClick={() => {
              changeToyFilter({ type: 'shapes', elem: 'cone' });
            }}
          ></div>
          <div
            className={`toyFilterShapeElem toyFilterShapeSnow ${clicked(shapes.snow)}`}
            onClick={() => {
              changeToyFilter({ type: 'shapes', elem: 'snow' });
            }}
          ></div>
          <div
            className={`toyFilterShapeElem toyFilterShapeToy ${clicked(shapes.toy)}`}
            onClick={() => {
              changeToyFilter({ type: 'shapes', elem: 'toy' });
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default ToyFilterShape;
