import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICandleTree, ITree, ITreeToy, TreeCreation } from '@contexts/tree-context';
import globalConfig from '@src/config/globalConfig';

type PayloadSection<T, P> = PayloadAction<{ section: T; value: P }>;
type ITreeKeys = keyof ITree;
type ITreeValues = ITree[ITreeKeys];

type TreeModifies = 'add' | 'delete' | 'move';
type TreeToyModifies = TreeModifies;
type TreePresentModifies = TreeModifies;
type TreeCandleModifies = TreeModifies | 'switchLight';

interface ITreeToyMove {
  old: ITreeToy;
  newX: number;
  newY: number;
}

interface ITreeCandleMove {
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
      switch (section) {
        case 'add':
          if ('old' in value) {
            return state;
          }
          state.toys.push(value);
          break;
        case 'delete':
          if ('old' in value || state.toys.indexOf(value) === -1) {
            return state;
          }
          state.toys.splice(state.toys.indexOf(value), 1);
          break;
        case 'move':
          if ('old' in value) {
            const treeToyIndex = state.toys.indexOf(value.old);
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
      switch (section) {
        case 'add':
          if ('old' in value) {
            return state;
          }
          state.presents.push(value);
          break;
        case 'delete':
          if ('old' in value || state.presents.indexOf(value) === -1) {
            return state;
          }
          state.presents.splice(state.presents.indexOf(value), 1);
          break;
        case 'move':
          if ('old' in value) {
            const presentToyIndex = state.presents.indexOf(value.old);
            state.presents[presentToyIndex].x = value.newX;
            state.presents[presentToyIndex].y = value.newY;
            break;
          }
      }
      return state;
    },
    changeTreeCandle: (
      state: ITree,
      { payload: { section, value } }: PayloadSection<TreeCandleModifies, ITreeToy | ICandleTree | ITreeCandleMove>
    ) => {
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
          if (state.candles.indexOf(value) === -1) {
            return state;
          }
          state.candles.splice(state.candles.indexOf(value), 1);
          return state;
        case 'move':
          if ('old' in value && 'isFired' in value.old) {
            const candleToyIndex = state.candles.indexOf(value.old);
            state.candles[candleToyIndex].x = value.newX;
            state.candles[candleToyIndex].y = value.newY;
          }
          break;
        case 'switchLight':
          if ('old' in value || !('isFired' in value)) {
            return state;
          }
          if (state.candles.includes(value)) {
            const index = state.candles.indexOf(value);
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
