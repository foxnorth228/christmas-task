import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICandleTree, ITree, ITreeToy, TreeCreation } from '@store/slices/treeSlice/types';
import globalConfig from '@src/config/globalConfig';

type PayloadSection<T, P> = PayloadAction<{ section: T; value: P }>;
export type ITreeKeys = keyof ITree;
export type ITreeValues = ITree[ITreeKeys];

export type TreeModifies = 'add' | 'delete' | 'move';
export type TreeToyModifies = TreeModifies;
export type TreePresentModifies = TreeModifies;
export type TreeCandleModifies = TreeModifies | 'switchLight';

export interface ITreeToyMove {
  old: ITreeToy;
  newX: number;
  newY: number;
}

export interface ITreeCandleMove {
  old: ICandleTree;
  newX: number;
  newY: number;
}

const treeSlice = createSlice({
  name: 'treeSlice',
  initialState: TreeCreation(),
  reducers: {
    changeValue: (
      state: ITree,
      { payload: { section, value } }: PayloadSection<ITreeKeys, ITreeValues>
    ) => {
      if (typeof value === 'object') {
        return state;
      }
      return {
        ...state,
        [section]: value,
      };
    },
    changeTreeToy: (
      state: ITree,
      { payload: { section, value } }: PayloadSection<TreeToyModifies, ITreeToy | ITreeToyMove>
    ) => {
      let index;
      switch (section) {
        case 'add':
          if ('old' in value) {
            return state;
          }
          state.toys.push(value);
          break;
        case 'delete':
          if ('old' in value) {
            return state;
          }
          index = state.toys.findIndex(
            (el) => el.type === value.type && el.x === value.x && el.y === value.y
          );
          if (index !== -1) {
            state.toys.splice(index, 1);
          }
          break;
        case 'move':
          if ('old' in value) {
            const treeToyIndex = state.toys.findIndex(
              (el) => el.type === value.old.type && el.x === value.old.x && el.y === value.old.y
            );
            state.toys[treeToyIndex].x = value.newX;
            state.toys[treeToyIndex].y = value.newY;
          }
          break;
      }
      return state;
    },
    changeTreePresent: (
      state: ITree,
      { payload: { section, value } }: PayloadSection<TreePresentModifies, ITreeToy | ITreeToyMove>
    ) => {
      let index;
      switch (section) {
        case 'add':
          if ('old' in value) {
            return state;
          }
          state.presents.push(value);
          break;
        case 'delete':
          if ('old' in value) {
            return state;
          }
          index = state.presents.findIndex(
            (el) => el.type === value.type && el.x === value.x && el.y === value.y
          );
          if (index !== -1) {
            state.presents.splice(index, 1);
          }
          break;
        case 'move':
          if ('old' in value) {
            const presentToyIndex = state.presents.findIndex(
              (el) => el.type === value.old.type && el.x === value.old.x && el.y === value.old.y
            );
            state.presents[presentToyIndex].x = value.newX;
            state.presents[presentToyIndex].y = value.newY;
            break;
          }
      }
      return state;
    },
    changeTreeCandle: (
      state: ITree,
      {
        payload: { section, value },
      }: PayloadSection<TreeCandleModifies, ITreeToy | ICandleTree | ITreeCandleMove>
    ) => {
      let index;
      switch (section) {
        case 'add':
          if ('old' in value || 'isFired' in value) {
            return state;
          }
          return {
            ...state,
            candles: [
              ...state.candles,
              {
                ...value,
                isFired: false,
                fireplace: globalConfig.candles[value.type],
              },
            ],
          };
        case 'delete':
          if ('old' in value || !('isFired' in value)) {
            return state;
          }
          index = state.candles.findIndex(
            (el) => el.type === value.type && el.x === value.x && el.y === value.y
          );
          if (index !== -1) {
            state.candles.splice(index, 1);
          }
          return state;
        case 'move':
          if ('old' in value && 'isFired' in value.old) {
            const candleToyIndex = state.candles.findIndex(
              (el) => el.type === value.old.type && el.x === value.old.x && el.y === value.old.y
            );
            state.candles[candleToyIndex].x = value.newX;
            state.candles[candleToyIndex].y = value.newY;
          }
          break;
        case 'switchLight':
          if ('old' in value || !('isFired' in value)) {
            return state;
          }
          index = state.candles.findIndex(
            (el) => el.type === value.type && el.x === value.x && el.y === value.y
          );
          if (index !== -1) {
            state.candles[index].isFired = !state.candles[index].isFired;
          }
          break;
      }
      return state;
    },
    reset: () => {
      return TreeCreation();
    },
    update: (_, action: PayloadAction<ITree>) => {
      return action.payload;
    },
  },
});

export default treeSlice.reducer;
export const { changeValue, changeTreeToy, changeTreePresent, changeTreeCandle, reset, update } =
  treeSlice.actions;
