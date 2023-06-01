import React from 'react';
import './FilterBlockValue.scss';
import { IChangeToyFilter } from '../../../pages/toyPage/toyPage';
import useFilter from '@src/hooks/useFilter';
import FilterElement from './FilterUnit/FilterUnit';
import { filterSections } from '@src/components/cardList/filterTypes';

function FilterBlockValue() {
  const [filter] = useFilter();
  return (
    <>
      <div className="toyFilterUnit toyFilterValue">
        <span className="toyFiltersValueName">Фильтры по значению</span>
        {Object.keys(filter).map((key, i) => {
          const section = key as filterSections;
          return <FilterElement key={i} i={i} name={section} obj={filter[section]} />;
        })}
      </div>
    </>
  );
}

export default FilterBlockValue;
