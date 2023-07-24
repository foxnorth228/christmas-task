import { useContext } from 'react';
import FilterContext from '@contexts/filter-context';
import { IFilter } from '@utils/filterTypes';
import { updatedReducer } from '@contexts/filter-context';

function useFilter(): [IFilter, updatedReducer] {
  const { filter, filterReducer } = useContext(FilterContext);
  return [filter, filterReducer];
}

export default useFilter;
