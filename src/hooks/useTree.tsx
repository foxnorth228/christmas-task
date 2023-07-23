import { useContext } from 'react';
import TreeContext from '@contexts/TreeContext';

const useTree = () => {
  const { tree, treeReducer } = useContext(TreeContext);
  return [tree, treeReducer];
};

export default useTree;
