import {
  FilterCreation,
  filterPositions,
  filterSections,
} from '@src/components/cardList/filterTypes';
import React from 'react';

const FilterContext = React.createContext({
  filter: FilterCreation(),
  filterReducer: (section: filterSections, position: filterPositions) => {},
});

export default FilterContext;
