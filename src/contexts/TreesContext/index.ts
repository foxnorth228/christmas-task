import { createContext } from 'react';
import { ITree } from '@contexts/tree-context';

const treesKeyWord = 'christmasTaskTrees';
const localData = localStorage.getItem(treesKeyWord);
export const defaultTreesData = (localData && JSON.parse(localData)) || [];

interface ITreesContext {
  trees: ITree[];
  treesReducer: (obj: ITreesPayload) => void;
}

export interface ITreesPayload {
  type: string;
  payload: ITree | number | null;
}

const TreesContext = createContext<ITreesContext>({
  trees: [
    {
      tree: 1,
      bg: 1,
      garland: -1,
      garlandMode: 0,
      star: 1,
      toys: [],
      presents: [],
      candles: [],
    },
  ],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  treesReducer: (obj: ITreesPayload) => {
    return;
  },
});

export const TreesReducer = (trees: ITree[], { type, payload }: ITreesPayload) => {
  let obj;
  switch (type) {
    case 'SAVE':
      if (payload !== null && typeof payload !== 'number') {
        localStorage.setItem(treesKeyWord, JSON.stringify([...trees, payload]));
        return [...trees, JSON.parse(JSON.stringify(payload))];
      }
      return trees;
    case 'DELETE':
      obj = [...trees];
      if (typeof payload === 'number') {
        obj.splice(payload, 1);
      }
      localStorage.setItem(treesKeyWord, JSON.stringify(obj));
      return obj;
    default:
      return trees;
  }
};

export default TreesContext;
