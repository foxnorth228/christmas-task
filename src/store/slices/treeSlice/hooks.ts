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

export const useTreeChangeValue = () => {
  const dispatch = useDispatch();
  return (obj: { section: ITreeKeys; value: ITreeValues }) => dispatch(changeValue(obj));
};

export const useTreeChangeTreeToy = () => {
  const dispatch = useDispatch();
  return (obj: { section: TreeToyModifies; value: ITreeToy | ITreeToyMove }) =>
    dispatch(changeTreeToy(obj));
};

export const useTreeChangeTreePresent = () => {
  const dispatch = useDispatch();
  return (obj: { section: TreeToyModifies; value: ITreeToy | ITreeToyMove }) =>
    dispatch(changeTreePresent(obj));
};

export const useTreeChangeTreeCandle = () => {
  const dispatch = useDispatch();
  return (obj: { section: TreeCandleModifies; value: ITreeToy | ICandleTree | ITreeCandleMove }) =>
    dispatch(changeTreeCandle(obj));
};

export const useTreeReset = () => {
  const dispatch = useDispatch();
  return () => dispatch(reset());
};

export const useTreeUpdate = () => {
  const dispatch = useDispatch();
  return (tree: ITree) => dispatch(update(tree));
};
