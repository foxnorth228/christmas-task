import React from 'react';
import './toyFilterColor.css';
import { IChangeToyFilter } from '../../../toyPage';

const clicked = (el: boolean) => (el ? 'toyFilterColorClicked' : 'violetBorder');

function ToyFilterColor({ filter, changeToyFilter }: IChangeToyFilter) {
  const colors = filter.colors;
  return (
    <>
      <div className="toyFilterSector toyFilterSectorColor">
        <span className="toyFilterSectorColor__name">Цвет:</span>
        <div className="toyFilterSectorColor__elems">
          <div
            className={`toyFilterSectorColor__elem toyFilterSectorColor__elem_white ${clicked(
              colors.white
            )}`}
            onClick={() => {
              changeToyFilter('colors', 'white');
            }}
          ></div>
          <div
            className={`toyFilterSectorColor__elem toyFilterSectorColor__elem_yellow ${clicked(
              colors.yellow
            )}`}
            onClick={() => {
              changeToyFilter('colors', 'yellow');
            }}
          ></div>
          <div
            className={`toyFilterSectorColor__elem toyFilterSectorColor__elem_red ${clicked(
              colors.red
            )}`}
            onClick={() => {
              changeToyFilter('colors', 'red');
            }}
          ></div>
          <div
            className={`toyFilterSectorColor__elem toyFilterSectorColor__elem_blue ${clicked(
              colors.blue
            )}`}
            onClick={() => {
              changeToyFilter('colors', 'blue');
            }}
          ></div>
          <div
            className={`toyFilterSectorColor__elem toyFilterSectorColor__elem_green ${clicked(
              colors.green
            )}`}
            onClick={() => {
              changeToyFilter('colors', 'green');
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default ToyFilterColor;
