import { useDispatch, useSelector } from 'react-redux';
import { reset, returned, select, update, use } from '../';
import { RootState } from '@src/store';
import { ITreeToy } from '@contexts/tree-context';
import { toy } from '@interfaces/toy';
import { PayloadAction } from '@reduxjs/toolkit';

export const useToys = () => {
  return useSelector((state: RootState) => state.toys);
};

export const useToysSelect = (): [toy[], (num: number) => PayloadAction<number>] => {
  const toys = useSelector((state: RootState) => state.toys);
  const dispatch = useDispatch();
  return [toys, (num: number) => dispatch(select(num))];
};

export const useToysUse = (): [toy[], (num: number) => PayloadAction<number>] => {
  const toys = useSelector((state: RootState) => state.toys);
  const dispatch = useDispatch();
  return [toys, (num: number) => dispatch(use(num))];
};

export const useToysReturned = (): [toy[], (num: number) => PayloadAction<number>] => {
  const toys = useSelector((state: RootState) => state.toys);
  const dispatch = useDispatch();
  return [toys, (num: number) => dispatch(returned(num))];
};

export const useToysReset = (): [toy[], () => PayloadAction<undefined>] => {
  const toys = useSelector((state: RootState) => state.toys);
  const dispatch = useDispatch();
  return [toys, () => dispatch(reset())];
};

export const useToysUpdate = (): [toy[], (num: ITreeToy[]) => PayloadAction<ITreeToy[]>] => {
  const toys = useSelector((state: RootState) => state.toys);
  const dispatch = useDispatch();
  return [toys, (toys: ITreeToy[]) => dispatch(update(toys))];
};
