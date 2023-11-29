import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@src/store';
import { deleteTree, save } from '@src/store/slices/treesSlice';
import { ITree } from '@contexts/tree-context';

export const useTrees = () => {
  return useSelector((state: RootState) => state.trees);
};

export const useTreesSave = () => {
  const dispatch = useDispatch();
  return (tree: ITree) => dispatch(save(tree));
};

export const useTreesDelete = () => {
  const dispatch = useDispatch();
  return (num: number) => dispatch(deleteTree(num));
};
