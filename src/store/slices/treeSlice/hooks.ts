import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@src/store';
import {
  changeTreeCandle,
  changeTreePresent,
  changeTreeToy,
  changeValue,
  ITreeCandleMove,
  ITreeKeys,
  ITreeToyMove,
  ITreeValues,
  reset,
  TreeCandleModifies,
  TreeToyModifies,
  update,
} from '@src/store/slices/treeSlice';
import { ICandleTree, ITree, ITreeToy } from '@contexts/tree-context';

export const useTree = () => {
  return useSelector((state: RootState) => state.tree);
};

const useFuncTreeChangeValue = () => {
  const dispatch = useDispatch();
  return (obj: { section: ITreeKeys; value: ITreeValues }) => dispatch(changeValue(obj));
};

export const useTreeChangeValue = (): [
  ReturnType<typeof useTree>,
  ReturnType<typeof useFuncTreeChangeValue>
] => {
  return [useTree(), useFuncTreeChangeValue()];
};

const useFuncTreeChangeToy = () => {
  const dispatch = useDispatch();
  return (obj: { section: TreeToyModifies; value: ITreeToy | ITreeToyMove }) =>
    dispatch(changeTreeToy(obj));
};

export const useTreeChangeToy = (): [
  ReturnType<typeof useTree>,
  ReturnType<typeof useFuncTreeChangeToy>
] => {
  return [useTree(), useFuncTreeChangeToy()];
};

const useFuncTreeChangePresent = () => {
  const dispatch = useDispatch();
  return (obj: { section: TreeToyModifies; value: ITreeToy | ITreeToyMove }) =>
    dispatch(changeTreePresent(obj));
};

export const useTreeChangePresent = (): [
  ReturnType<typeof useTree>,
  ReturnType<typeof useFuncTreeChangePresent>
] => {
  return [useTree(), useFuncTreeChangePresent()];
};

const useFuncTreeChangeCandle = () => {
  const dispatch = useDispatch();
  return (obj: { section: TreeCandleModifies; value: ITreeToy | ICandleTree | ITreeCandleMove }) =>
    dispatch(changeTreeCandle(obj));
};

export const useTreeChangeCandle = (): [
  ReturnType<typeof useTree>,
  ReturnType<typeof useFuncTreeChangeCandle>
] => {
  return [useTree(), useFuncTreeChangeCandle()];
};

const useFuncTreeReset = () => {
  const dispatch = useDispatch();
  return () => dispatch(reset());
};

export const useTreeReset = (): [
  ReturnType<typeof useTree>,
  ReturnType<typeof useFuncTreeReset>
] => {
  return [useTree(), useFuncTreeReset()];
};

const useFuncTreeUpdate = () => {
  const dispatch = useDispatch();
  return (tree: ITree) => dispatch(update(tree));
};

export const useTreeUpdate = (): [
  ReturnType<typeof useTree>,
  ReturnType<typeof useFuncTreeUpdate>
] => {
  return [useTree(), useFuncTreeUpdate()];
};
