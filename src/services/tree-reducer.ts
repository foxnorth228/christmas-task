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
    case 'ADD_TOY':
      break;
    case 'CHANGE_TOY':
      break;
    case 'DELETE_TOY':
      break;
    default:
      return tree;
  }
  return tree;
};

export default TreeReducer;
