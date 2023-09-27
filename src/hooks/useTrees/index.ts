import { useContext } from 'react';
import TreesContext, { ITreesPayload } from '@contexts/TreesContext';
import { ITree } from '@contexts/tree-context';

const useTrees = (): [ITree[], (obj: ITreesPayload) => void] => {
  const { trees, treesReducer } = useContext(TreesContext);
  return [trees, treesReducer];
};

export default useTrees;
