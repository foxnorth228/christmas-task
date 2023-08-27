import React from 'react';

export interface ITree {
  tree: number;
  bg: number;
  garland: number;
  toys: Array<{
    x: number;
    y: number;
    type: number;
  }>;
}

export interface ITreeReducerValue {
  type: string;
  payload: {
    section?: ITreeSections;
    value:
      | number
      | {
          x: number;
          y: number;
          type: number;
        };
  };
}

export type ITreeSections = 'tree' | 'bg' | 'garland' | 'add' | 'delete';
export type ITreeReducer = ({ type, payload }: ITreeReducerValue) => void;

export interface ITreeContext {
  tree: ITree;
  treeReducer: ITreeReducer;
}

const TreeContext = React.createContext<ITreeContext>({
  tree: {
    tree: 1,
    bg: 1,
    garland: 0,
    toys: [],
  },
  treeReducer() {
    return;
  },
});

export const TreeReducer = (tree: ITree, value: ITreeReducerValue) => {
  switch (value.type) {
    case 'CHANGE_VALUE':
      if (typeof value.payload.section === 'undefined' || !(value.payload.section in tree)) {
        break;
      }
      return {
        ...tree,
        [value.payload.section]: value.payload.value,
      };
    case 'CHANGE_TREE_TOY':
      if (typeof value.payload.value !== 'object') {
        return tree;
      }
      switch (value.payload.section) {
        case 'add':
          return {
            ...tree,
            toys: [...tree.toys, value.payload.value],
          };
        case 'delete':
          if (tree.toys.indexOf(value.payload.value) === -1) {
            return tree;
          }
          tree.toys.splice(tree.toys.indexOf(value.payload.value), 1);
          return tree;
        default:
          return tree;
      }
    default:
      return tree;
  }
  return tree;
};

export default TreeContext;
