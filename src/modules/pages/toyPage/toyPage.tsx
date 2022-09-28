import React, { Dispatch } from 'react';
import './toyPage.css';
import { createCards } from './createToyCards';
import { data } from '../../../index';
import { IChangeFilter, IFilter } from '../../main/Main';

import ToyFilterShape from './toyFilter/toyFilterValue/toyFilterShape/toyFilterShape';
import ToyFilterColor from './toyFilter/toyFilterValue/toyFilterColor/toyFilterColor';
import ToyFilterSize from './toyFilter/toyFilterValue/toyFilterSize/toyFIlterSize';
import ToyFilterFav from './toyFilter/toyFilterValue/toyFilterFav/toyFilterFav';

export interface IChangeToyFilter {
  filter: IFilter;
  changeToyFilter: Dispatch<IChangeFilter>;
}

function ToyPage({ filter, changeToyFilter }: IChangeToyFilter) {
  return (
    <>
      <div className="page toyPage">
        <div className="toyFilters">
          <div className="toyFiltersType toyFiltersValue">
            <span className="toyFiltersValueName">Фильтры по значению</span>
            <ToyFilterShape filter={filter} changeToyFilter={changeToyFilter} />
            <ToyFilterColor filter={filter} changeToyFilter={changeToyFilter} />
            <ToyFilterSize filter={filter} changeToyFilter={changeToyFilter} />
            <ToyFilterFav filter={filter} changeToyFilter={changeToyFilter} />
          </div>
          <div className="toyFiltersType toyFiltersRange">
            <span>Фильтры по </span>
            <div className="toyFilterRangeSecNumber">
              <span>Количество</span>
              <div className="toyFilterRangeNumber"></div>
            </div>
            <div className="toyFilterRangeSecYear">
              <span>Год</span>
              <div className="toyFilterRangeYear"></div>
            </div>
          </div>
          <div className="toyFiltersType toyFiltersSort">
            <span>Сортировка</span>
            <select></select>
            <button></button>
            <button></button>
          </div>
        </div>
        <div className="cardList">{createCards(data, filter)}</div>
      </div>
    </>
  );
}

export default ToyPage;
