import {useContext} from "react";
import TreeContext from '@contexts/TreeContext';

const useTree = () => {
  const a = useContext(TreeContext);
  return a;
};

export default useTree;
