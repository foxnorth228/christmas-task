import { ITree, ITreeSections } from '@contexts/TreeContext';

export interface ITreeReducerValue {
  type: string;
  payload: {
    section?: ITreeSections;
    value: number | object;
  };
}
const TreeReducer = (tree: ITree, value: ITreeReducerValue) => {
  switch (value.type) {
    case 'CHANGE_VALUE':
      if (typeof value.payload.section === 'undefined') {
        break;
      }
      return {
        ...tree,
        [value.payload.section]: value.payload.value,
      };
    case 'CHANGE_LIST_TOY':
      break;
    case 'CHANGE_TREE_TOY':
      break;
    default:
      return tree;
  }
  return tree;
};

export default TreeReducer;
