import { useContext } from 'react';
import TreeContext from '@contexts/TreeContext';

const useTree = () => {
  const { tree, toggle } = useContext(TreeContext);
  return [tree, toggle];
};

export default useTree;
