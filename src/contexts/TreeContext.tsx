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
export interface ITreeContext {
  tree: ITree;
  toggle: () => void;
}

const TreeContext = React.createContext<ITreeContext>({
  tree: {
    tree: 1,
    bg: 1,
    garland: 0,
    toys: [],
  },
  toggle() {
    return;
  },
});
export default TreeContext;
