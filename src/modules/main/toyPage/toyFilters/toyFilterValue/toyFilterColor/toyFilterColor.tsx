import React from 'react';
import './toyFilterColor.css';
import { IChangeToyFilter } from '../../../toyPage';

const clicked = (el: boolean) => (el ? 'toyFilterColorClicked' : 'violetBorder');

function ToyFilterColor({ filter, changeToyFilter }: IChangeToyFilter) {
  const colors = filter.colors;
  return (
    <>
      <div className="toyFiltersValueType toyFilterColor">
        <span className="toyFilterColorName">Цвет:</span>
        <div className="toyFilterColorElems">
          <div
            className={`toyFilterColorElem toyFilterColorWhite ${clicked(colors.white)}`}
            onClick={() => {
              changeToyFilter('colors', 'white');
            }}
          ></div>
          <div
            className={`toyFilterColorElem toyFilterColorYellow ${clicked(colors.yellow)}`}
            onClick={() => {
              changeToyFilter('colors', 'yellow');
            }}
          ></div>
          <div
            className={`toyFilterColorElem toyFilterColorRed ${clicked(colors.red)}`}
            onClick={() => {
              changeToyFilter('colors', 'red');
            }}
          ></div>
          <div
            className={`toyFilterColorElem toyFilterColorBlue ${clicked(colors.blue)}`}
            onClick={() => {
              changeToyFilter('colors', 'blue');
            }}
          ></div>
          <div
            className={`toyFilterColorElem toyFilterColorGreen ${clicked(colors.green)}`}
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
