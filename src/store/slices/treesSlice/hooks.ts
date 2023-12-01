import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@src/store';
import { deleteTree, save } from '@src/store/slices/treesSlice/index';
import { ITree } from '@store/slices/treeSlice/types';

export const useTrees = () => {
  return useSelector((state: RootState) => state.trees);
};

export const useTreesSave = () => {
  const dispatch = useDispatch();
  return (tree: ITree) => dispatch(save(tree));
};

const useFuncTreesDelete = () => {
  const dispatch = useDispatch();
  return (num: number) => dispatch(deleteTree(num));
};

export const useTreesDelete = (): [
  ReturnType<typeof useTrees>,
  ReturnType<typeof useFuncTreesDelete>
] => {
  return [useTrees(), useFuncTreesDelete()];
};
