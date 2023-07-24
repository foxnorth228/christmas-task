import { useContext } from 'react';
import TreeContext, { ITree, ITreeReducer } from '@contexts/tree-context';

const useTree = (): [ITree, ITreeReducer] => {
  const { tree, treeReducer } = useContext(TreeContext);
  return [tree, treeReducer];
};

export default useTree;
