import React from 'react';
import './main.css';

function Main() {
  return (
    <>
      <main className="mainBody">
        <div className="page pageDisFlex startPage">
          <div className="startPageElems">
            <img src="./src/assets/ball/1.png" className="startPageToy"></img>
            <span className="startPageText">{'Новогодняя игра "Наряди ёлку"'}</span>
            <button className="startPageButton">Начать</button>
            <img src="./src/assets/ball/2.png" className="startPageToy2"></img>
          </div>
        </div>
        <div className="page pageDisNone toyPage">
          <div className="toyFilters">
            <div className="toyFiltersType toyFiltersValue">
              <span className="toyFiltersValueName">Фильтры по значению</span>
              <div className="toyFiltersValueType toyFiltersValueShape">
                <span className="toyFiltersValueShapeName">Форма:</span>
                <div className="toyFiltersValueShapeElems">
                  <div className="svgIcon toyFiltersValueShapeElem toyFiltersValueShapeBall"></div>
                  <div className="svgIcon toyFiltersValueShapeElem toyFiltersValueShapeBell"></div>
                  <div className="svgIcon toyFiltersValueShapeElem toyFiltersValueShapeCone"></div>
                  <div className="svgIcon toyFiltersValueShapeElem toyFiltersValueShapeSnow"></div>
                  <div className="svgIcon toyFiltersValueShapeElem toyFiltersValueShapeToy"></div>
                </div>
              </div>
              <div className="toyFiltersValueType toyFiltersValueColor">
                <span className="toyFiltersValueColorName">Цвет:</span>
                <div className="toyFiltersValueColorElems">
                  <div className="toyFiltersValueColorElem toyFiltersValueColorWhite"></div>
                  <div className="toyFiltersValueColorElem toyFiltersValueColorYellow"></div>
                  <div className="toyFiltersValueColorElem toyFiltersValueColorRed"></div>
                  <div className="toyFiltersValueColorElem toyFiltersValueColorBlue"></div>
                  <div className="toyFiltersValueColorElem toyFiltersValueColorGreen"></div>
                </div>
              </div>
              <div className="toyFiltersValueType toyFiltersValueSize">
                <span className="toyFiltersValueSizeName">Размер:</span>
                <div className="toyFiltersValueSizeElems">
                  <div className="svgIcon toyFiltersValueSizeElem toyFiltersValueSizeBig"></div>
                  <div className="svgIcon toyFiltersValueSizeElem toyFiltersValueSizeMedium"></div>
                  <div className="svgIcon toyFiltersValueSizeElem toyFiltersValueSizeSmall"></div>
                </div>
              </div>
              <div className="toyFiltersValueType toyFiltersValueFav">
                <span className="toyFiltersValueFavName">Только любимые:</span>
                <div className="toyFiltersValueFavElems"></div>
              </div>
            </div>
            <div className="toyFiltersType toyFiltersRange">
              <span>Name</span>
              <div className="toyFilterRangeSecNumber">
                <span>Name</span>
                <div className="toyFilterRangeNumber"></div>
              </div>
              <div className="toyFilterRangeSecYear">
                <span>Name</span>
                <div className="toyFilterRangeYear"></div>
              </div>
            </div>
            <div className="toyFiltersType toyFiltersSort">
              <span>Name</span>
              <select></select>
              <button></button>
              <button></button>
            </div>
          </div>
          <div className="toyList"></div>
        </div>
        <div className="page pageDisNone treePage"></div>
      </main>
    </>
  );
}

export default Main;
