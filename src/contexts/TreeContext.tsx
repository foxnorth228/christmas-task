import React from 'react';
import { ITreeReducerValue } from '@services/tree-reducer';

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
export default TreeContext;
