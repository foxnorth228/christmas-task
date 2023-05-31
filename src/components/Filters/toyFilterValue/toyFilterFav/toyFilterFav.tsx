import React from 'react';
import './toyFilterFav.css';
import { IChangeToyFilter } from '../../../../pages/toyPage/toyPage';
import useFilter from '@src/hooks/useFilter';

function ToyFilterFav() {
  const [filter, changeToyFilter] = useFilter();
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
