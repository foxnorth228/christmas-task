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
              changeToyFilter({ type: 'colors', elem: 'white' });
            }}
          ></div>
          <div
            className={`toyFilterColorElem toyFilterColorYellow ${clicked(colors.yellow)}`}
            onClick={() => {
              changeToyFilter({ type: 'colors', elem: 'yellow' });
            }}
          ></div>
          <div
            className={`toyFilterColorElem toyFilterColorRed ${clicked(colors.red)}`}
            onClick={() => {
              changeToyFilter({ type: 'colors', elem: 'red' });
            }}
          ></div>
          <div
            className={`toyFilterColorElem toyFilterColorBlue ${clicked(colors.blue)}`}
            onClick={() => {
              changeToyFilter({ type: 'colors', elem: 'blue' });
            }}
          ></div>
          <div
            className={`toyFilterColorElem toyFilterColorGreen ${clicked(colors.green)}`}
            onClick={() => {
              changeToyFilter({ type: 'colors', elem: 'green' });
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default ToyFilterColor;
