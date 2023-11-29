import { configureStore } from '@reduxjs/toolkit';
import toysReducer from '@src/store/slices/toysSlice';
import treeReducer from '@src/store/slices/treeSlice';
import filterReducer from '@src/store/slices/filterSlice';
import treesReducer from '@src/store/slices/treesSlice';

export const store = configureStore({
  reducer: {
    toys: toysReducer,
    tree: treeReducer,
    filter: filterReducer,
    trees: treesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
