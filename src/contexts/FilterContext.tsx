import { FilterCreation, IChangeFilter } from '@services/filterTypes';
import React from 'react';

export type updatedReducer = ({ section, position }: IChangeFilter) => void;

const FilterContext = React.createContext({
  filter: FilterCreation(),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  filterReducer: ({ section, position }: IChangeFilter) => {},
});

export default FilterContext;
