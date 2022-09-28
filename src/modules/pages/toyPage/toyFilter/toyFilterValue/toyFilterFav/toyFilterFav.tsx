import React from 'react';
import './toyFilterFav.css';
import { IChangeToyFilter } from '../../../toyPage';

function ToyFilterFav({ /*filter,*/ changeToyFilter }: IChangeToyFilter) {
  //const fav = filter.fav;
  return (
    <>
      <div className="toyFiltersValueType toyFiltersValueFav">
        <span className="toyFiltersValueFavName">Только любимые:</span>
        <div
          className="toyFiltersValueFavElems"
          onClick={() => {
            changeToyFilter({ type: 'fav', elem: 'favorite' });
          }}
        ></div>
      </div>
    </>
  );
}

export default ToyFilterFav;
