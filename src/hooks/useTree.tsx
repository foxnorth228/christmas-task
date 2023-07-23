import { useContext } from 'react';
import TreeContext, { ITree, ITreeReducer } from '@contexts/TreeContext';

const useTree = (): [ITree, ITreeReducer] => {
  const { tree, treeReducer } = useContext(TreeContext);
  return [tree, treeReducer];
};

export default useTree;
