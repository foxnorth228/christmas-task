import React from 'react';
import './toyFilterFav.css';
import { IChangeToyFilter } from '../../../toyPage';

function ToyFilterFav({ /*filter,*/ changeToyFilter }: IChangeToyFilter) {
  //const fav = filter.fav;
  return (
    <>
      <div className="toyFilterSector toyFilterSectorFav">
        <span className="toyFilterSectorFav__name">Только любимые:</span>
        <div
          className="toyFilterSectorFav__elems"
          onClick={() => {
            changeToyFilter('fav', 'favorite');
          }}
        ></div>
      </div>
    </>
  );
}

export default ToyFilterFav;
