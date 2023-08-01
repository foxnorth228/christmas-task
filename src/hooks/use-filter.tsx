import { useContext } from 'react';
import FilterContext from '@contexts/filter-context';
import { IFilter } from '@contexts/filter-context';
import { IFilterReducer } from '@contexts/filter-context';

function useFilter(): [IFilter, IFilterReducer] {
  const { filter, filterReducer } = useContext(FilterContext);
  return [filter, filterReducer];
}

export default useFilter;
