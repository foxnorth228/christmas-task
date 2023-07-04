import { FilterCreation, IChangeFilter } from '@services/filterTypes';
import React from 'react';

const FilterContext = React.createContext({
  filter: FilterCreation(),
  filterReducer: ({ section, position }: IChangeFilter) => {},
});

export default FilterContext;
