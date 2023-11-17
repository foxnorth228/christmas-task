import React from 'react';

export interface ITreeToy {
  x: number;
  y: number;
  type: number;
}

export interface ITree {
  tree: number;
  bg: number;
  garland: number;
  garlandMode: number;
  star: number;
  toys: Array<ITreeToy>;
  presents: Array<ITreeToy>;
  candles: Array<ITreeToy>;
}

export interface ITreeReducerValue {
  type: string;
  payload: {
    section?: ITreeSections;
    value: number | ITree | ITreeToy | { old: ITreeToy; newX: number; newY: number };
  };
}

export type ITreeSections =
  | 'tree'
  | 'bg'
  | 'garland'
  | 'garlandMode'
  | 'star'
  | 'add'
  | 'delete'
  | 'move';
export type ITreeReducer = ({ type, payload }: ITreeReducerValue) => void;

export interface ITreeContext {
  tree: ITree;
  treeReducer: ITreeReducer;
}

const TreeContext = React.createContext<ITreeContext>({
  tree: {
    tree: 1,
    bg: 1,
    garland: -1,
    garlandMode: 0,
    star: 1,
    toys: [],
    presents: [],
    candles: [],
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
      if (typeof value.payload.value !== 'object' || 'tree' in value.payload.value) {
        return tree;
      }
      switch (value.payload.section) {
        case 'add':
          if ('old' in value.payload.value) {
            return tree;
          }
          return {
            ...tree,
            toys: [...tree.toys, value.payload.value],
          };
        case 'delete':
          if ('old' in value.payload.value) {
            return tree;
          }
          if (tree.toys.indexOf(value.payload.value) === -1) {
            return tree;
          }
          tree.toys.splice(tree.toys.indexOf(value.payload.value), 1);
          return tree;
        case 'move':
          if ('old' in value.payload.value) {
            const treeToyIndex = tree.toys.indexOf(value.payload.value.old);
            tree.toys[treeToyIndex].x = value.payload.value.newX;
            tree.toys[treeToyIndex].y = value.payload.value.newY;
            return tree;
          }
          return tree;
        default:
          return tree;
      }
    case 'CHANGE_TREE_PRESENT':
      if (typeof value.payload.value !== 'object' || 'tree' in value.payload.value) {
        return tree;
      }
      switch (value.payload.section) {
        case 'add':
          if ('old' in value.payload.value) {
            return tree;
          }
          return {
            ...tree,
            presents: [...tree.presents, value.payload.value],
          };
        case 'delete':
          if ('old' in value.payload.value) {
            return tree;
          }
          if (tree.presents.indexOf(value.payload.value) === -1) {
            return tree;
          }
          tree.presents.splice(tree.presents.indexOf(value.payload.value), 1);
          return tree;
        case 'move':
          if ('old' in value.payload.value) {
            const presentToyIndex = tree.presents.indexOf(value.payload.value.old);
            tree.presents[presentToyIndex].x = value.payload.value.newX;
            tree.presents[presentToyIndex].y = value.payload.value.newY;
            return tree;
          }
          return tree;
        default:
          return tree;
      }
    case 'CHANGE_TREE_CANDLE':
      if (typeof value.payload.value !== 'object' || 'tree' in value.payload.value) {
        return tree;
      }
      switch (value.payload.section) {
        case 'add':
          if ('old' in value.payload.value) {
            return tree;
          }
          return {
            ...tree,
            candles: [...tree.candles, value.payload.value],
          };
        case 'delete':
          if ('old' in value.payload.value) {
            return tree;
          }
          if (tree.candles.indexOf(value.payload.value) === -1) {
            return tree;
          }
          tree.candles.splice(tree.candles.indexOf(value.payload.value), 1);
          return tree;
        case 'move':
          if ('old' in value.payload.value) {
            const candleToyIndex = tree.candles.indexOf(value.payload.value.old);
            tree.candles[candleToyIndex].x = value.payload.value.newX;
            tree.candles[candleToyIndex].y = value.payload.value.newY;
            return tree;
          }
          return tree;
        default:
          return tree;
      }
    case 'RESET':
      return TreeCreation();
    case 'UPDATE':
      if (typeof value.payload.value !== 'object' || !('tree' in value.payload.value)) {
        return tree;
      }
      return value.payload.value;
    default:
      return tree;
  }
  return tree;
};

export default TreeContext;

export function TreeCreation() {
  return {
    tree: 1,
    bg: 1,
    garland: 1,
    garlandMode: 0,
    star: 1,
    toys: [],
    presents: [],
  };
}
