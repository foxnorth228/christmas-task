import { useContext } from 'react';
import FilterContext from '@src/contexts/FilterContext';
import { IFilter } from '@services/filterTypes';
import { updatedReducer } from '@contexts/FilterContext';

function useFilter(): [IFilter, updatedReducer] {
  const { filter, filterReducer } = useContext(FilterContext);
  return [filter, filterReducer];
}

export default useFilter;
