import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import FilterCreation from "@services/getFilter";
import {IFilter} from "@contexts/filter-context";

type filterSections = keyof IFilter;

export const filterKeyWord = 'christmasTaskFilter';
const filterSlice = createSlice({
  name: 'filterSlice',
  initialState: FilterCreation(),
  reducers: {
    changeBool: (
      state,
      { payload: { section, value } }: PayloadAction<{ section: filterSections; value: string }>
    ) => {
      let filterSection = state[section];
      if (typeof filterSection !== 'object') {
        return state;
      }
      const posCurrentValue = Object.entries(filterSection).find((el) => el[0] === value);
      if (posCurrentValue !== undefined && typeof value !== 'undefined') {
        filterSection = {
          ...filterSection,
          [value]: !posCurrentValue[1],
        };
      }
      localStorage.setItem(filterKeyWord, JSON.stringify({ ...state, [section]: filterSection }));
      return {
        ...state,
        [section]: filterSection,
      };
    },
    changeRange: (
      state,
      {
        payload: { section, value },
      }: PayloadAction<{ section: filterSections; value: [number, number] }>
    ) => {
      let filterSection = state[section];
      if (typeof filterSection !== 'object') {
        return state;
      }
      if ('left' in filterSection && typeof value === 'object') {
        filterSection = {
          ...filterSection,
          left: value[0],
          right: value[1],
        };
      }
      localStorage.setItem(filterKeyWord, JSON.stringify({ ...state, [section]: filterSection }));
      return {
        ...state,
        [section]: filterSection,
      };
    },
    changeValue: (
      state,
      {
        payload: { section, value },
      }: PayloadAction<{ section: filterSections; value: number | boolean }>
    ) => {
      if (['sort', 'music', 'snow', 'searchSample'].includes(section)) {
        localStorage.setItem(filterKeyWord, JSON.stringify({ ...state, [section]: value }));
        return {
          ...state,
          [section]: value,
        };
      }
      return state;
    },
    reset: () => {
      localStorage.setItem(filterKeyWord, JSON.stringify(FilterCreation()));
      return FilterCreation();
    },
  },
});

export default filterSlice.reducer;
