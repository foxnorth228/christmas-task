import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import getData from '@services/getData';
import { ITreeToy } from '@store/slices/treeSlice/types';

export const toysSlice = createSlice({
  name: 'toys',
  initialState: getData(),
  reducers: {
    select: (state, action: PayloadAction<number>) => {
      const toyIndex = state.findIndex((el) => el.num === action.payload);
      if (!(typeof toyIndex === 'undefined')) {
        state[toyIndex] = { ...state[toyIndex], selected: !state[toyIndex].selected };
      }
      return state;
    },
    use: (state, action: PayloadAction<number>) => {
      const toyIndex = state.findIndex((el) => el.num === action.payload);
      if (!(typeof toyIndex === 'undefined' || state[toyIndex].countFreeToys === 0)) {
        state[toyIndex] = { ...state[toyIndex], countFreeToys: --state[toyIndex].countFreeToys };
      }
      return state;
    },
    returned: (state, action: PayloadAction<number>) => {
      const toyIndex = state.findIndex((el) => el.num === action.payload);
      if (
        !(
          typeof toyIndex === 'undefined' || state[toyIndex].countFreeToys === state[toyIndex].count
        )
      ) {
        state[toyIndex] = { ...state[toyIndex], countFreeToys: ++state[toyIndex].countFreeToys };
      }
      return state;
    },
    reset: (state) => {
      for (let i = 0; i < state.length; ++i) {
        state[i].countFreeToys = state[i].count;
      }
      return state;
    },
    update: (state, action: PayloadAction<ITreeToy[]>) => {
      for (let i = 0; i < state.length; ++i) {
        state[i].countFreeToys = state[i].count;
      }
      for (let i = 0; i < action.payload.length; ++i) {
        const toyIndex = state.findIndex((el) => el.num === action.payload[i].type);
        state[toyIndex].countFreeToys -= 1;
      }
      return state;
    },
  },
});

export const { select, use, update, reset, returned } = toysSlice.actions;
export default toysSlice.reducer;
