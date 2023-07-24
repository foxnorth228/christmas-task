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
    value: number | object;
  };
}

export type ITreeSections = 'tree' | 'bg' | 'garland' | 'toys';
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

export default TreeContext;
