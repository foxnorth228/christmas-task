import React from 'react';
import './toyFilterValue.scss';
import './toyFilterShape/toyFilterShape.scss';
import './toyFilterColor/toyFilterColor.css';
import { IChangeToyFilter } from '../../../pages/toyPage/toyPage';
import ToyFilterFav from './toyFilterFav/toyFilterFav';
import useFilter from '@src/hooks/useFilter';
import FilterBlock from './toyFilterSize/toyFIlterSize';
import { filterSections } from '@src/components/cardList/filterTypes';

function FilterBlockValue() {
  const [filter, filterReducer] = useFilter();
  return (
    <>
      <div className="toyFilterUnit toyFilterValue">
        <span className="toyFiltersValueName">Фильтры по значению</span>
        {Object.keys(filter).map((key, i) => {
          const section = key as filterSections;
          return <FilterBlock key={i} i={i} name={section} obj={filter[section]} />;
        })}
      </div>
    </>
  );
}

export default FilterBlockValue;
