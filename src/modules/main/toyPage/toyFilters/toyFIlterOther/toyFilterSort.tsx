import React from 'react';
import './toyFilterSort.scss';
import { IChangeToyFilter } from '../../toyPage';

function ToyFilterSort({ filter, changeToyFilter }: IChangeToyFilter) {
  return (
    <>
      <div className="toyFiltersType toyFiltersSort">
        <span>Сортировка</span>
        <select></select>
        <button></button>
        <button></button>
      </div>
    </>
  );
}

export default ToyFilterSort;
