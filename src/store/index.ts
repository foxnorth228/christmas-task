import { configureStore } from '@reduxjs/toolkit';
import toysReducer from '@src/store/slices/toysSlice';

export const store = configureStore({
  reducer: {
    toys: toysReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
