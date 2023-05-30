import React from 'react';
import './toyFilterSort.scss';
import { IChangeToyFilter } from '../../../pages/toyPage/toyPage';

function ToyFilterSort({ filter, changeToyFilter }: IChangeToyFilter) {
  return (
    <>
      <div className="toyFilterUnit toyFilterSort">
        <span>Сортировка</span>
        <select></select>
        <button></button>
        <button></button>
      </div>
    </>
  );
}

export default ToyFilterSort;
