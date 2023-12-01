import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITree } from '@store/slices/treeSlice/types';

const treesKeyWord = 'christmasTaskTrees';
const localData = localStorage.getItem(treesKeyWord);
export const defaultTreesData = (localData && JSON.parse(localData)) || [];

const treesSlice = createSlice({
  name: 'treesSlice',
  initialState: defaultTreesData as ITree[],
  reducers: {
    save: (state: ITree[], action: PayloadAction<ITree>) => {
      localStorage.setItem(treesKeyWord, JSON.stringify([...state, action.payload]));
      return [...state, JSON.parse(JSON.stringify(action.payload))];
    },
    deleteTree: (state: ITree[], action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
      localStorage.setItem(treesKeyWord, JSON.stringify(state));
      return state;
    },
  },
});

export const { save, deleteTree } = treesSlice.actions;
export default treesSlice.reducer;
