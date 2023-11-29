import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@src/store';
import {
  changeBool,
  changeRange,
  changeValue,
  filterSections,
  reset,
} from '@src/store/slices/filterSlice/index';

export const useFilter = () => {
  return useSelector((state: RootState) => state.filter);
};

export const useFilterChangeValue = () => {
  const dispatch = useDispatch();
  return (obj: { section: filterSections; value: number | boolean }) => dispatch(changeValue(obj));
};

export const useFilterChangeRange = () => {
  const dispatch = useDispatch();
  return (obj: { section: filterSections; value: [number, number] }) => dispatch(changeRange(obj));
};

export const useFilterChangeBool = () => {
  const dispatch = useDispatch();
  return (obj: { section: filterSections; value: string }) => dispatch(changeBool(obj));
};

export const useFilterReset = () => {
  const dispatch = useDispatch();
  return () => dispatch(reset());
};
