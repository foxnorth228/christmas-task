import { IChangeFilter, IFilter } from '@utils/filterTypes';
import React from 'react';
import FilterCreation from '@services/getFilter';

export type updatedReducer = ({ section, position }: IChangeFilter) => void;

const FilterContext = React.createContext({
  filter: FilterCreation(),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  filterReducer: ({ section, position }: IChangeFilter) => {},
});

export function filterReducer(filter: IFilter, { section, position }: IChangeFilter) {
  let filterSection = filter[section];
  const posCurrentValue: [string, boolean] | undefined = Object.entries(filterSection).find(
    (el) => el[0] === position
  );
  if (posCurrentValue !== undefined) {
    filterSection = {
      ...filterSection,
      [position]: !posCurrentValue[1],
    };
  }
  return {
    ...filter,
    [section]: filterSection,
  };
}

export default FilterContext;
