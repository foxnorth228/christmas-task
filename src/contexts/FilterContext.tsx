import { FilterCreation, IChangeFilter } from '@services/filterTypes';
import React from 'react';

export type updatedReducer = ({ section, position }: IChangeFilter) => void;

const FilterContext = React.createContext({
  filter: FilterCreation(),
  filterReducer: ({ section, position }: IChangeFilter) => {},
});

export default FilterContext;
