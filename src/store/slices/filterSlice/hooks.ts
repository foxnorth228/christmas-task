import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@src/store';
import {
  changeBool,
  changeRange,
  changeValue,
  filterSections,
  reset,
} from '@src/store/slices/filterSlice/index';
import { filterPositions } from '@store/slices/filterSlice/types';

export const useFilter = () => {
  return useSelector((state: RootState) => state.filter);
};

const useFuncFilterChangeValue = () => {
  const dispatch = useDispatch();
  return (obj: { section: filterSections; value: number | boolean | string }) =>
    dispatch(changeValue(obj));
};

export const useFilterChangeValue = (): [
  ReturnType<typeof useFilter>,
  ReturnType<typeof useFuncFilterChangeValue>
] => {
  return [useFilter(), useFuncFilterChangeValue()];
};

const useFuncFilterChangeRange = () => {
  const dispatch = useDispatch();
  return (obj: { section: filterSections; value: [number, number] }) => dispatch(changeRange(obj));
};

export const useFilterChangeRange = (): [
  ReturnType<typeof useFilter>,
  ReturnType<typeof useFuncFilterChangeRange>
] => {
  return [useFilter(), useFuncFilterChangeRange()];
};

const useFuncFilterChangeBool = () => {
  const dispatch = useDispatch();
  return (obj: { section: filterSections; value: filterPositions }) => dispatch(changeBool(obj));
};

export const useFilterChangeBool = (): [
  ReturnType<typeof useFilter>,
  ReturnType<typeof useFuncFilterChangeBool>
] => {
  return [useFilter(), useFuncFilterChangeBool()];
};

const useFuncFilterReset = () => {
  const dispatch = useDispatch();
  return () => dispatch(reset());
};

export const useFilterReset = (): [
  ReturnType<typeof useFilter>,
  ReturnType<typeof useFuncFilterReset>
] => {
  return [useFilter(), useFuncFilterReset()];
};
