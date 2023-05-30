import { useContext } from 'react';
import FilterContext from '@src/contexts/FilterContext';
import { IFilter } from '@src/components/cardList/filterTypes';
import { updatedReducer } from '@src/layouts/main/Main';

function useFilter(): [IFilter, updatedReducer] {
  const { filter, filterReducer } = useContext(FilterContext);
  return [filter, filterReducer];
}

export default useFilter;
