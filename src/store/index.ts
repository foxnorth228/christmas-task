import { configureStore } from '@reduxjs/toolkit';
import toysReducer from '@src/store/slices/toysSlice';
import treeReducer from '@src/store/slices/treeSlice';

export const store = configureStore({
  reducer: {
    toys: toysReducer,
    tree: treeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
