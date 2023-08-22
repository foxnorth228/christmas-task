import React from 'react';
import FilterCreation from '@services/getFilter';

export type IFilterReducer = ({
  type,
  payload: { section, position, value },
}: IFilterReducerValues) => void;

interface IFilterContext {
  filter: IFilter;
  filterReducer: IFilterReducer;
}

const FilterContext = React.createContext<IFilterContext>({
  filter: FilterCreation(),
  filterReducer: () => {},
});

export function FilterReducer(
  filter: IFilter,
  { type, payload: { section, position, value } }: IFilterReducerValues
): IFilter {
  let filterSection;
  let posCurrentValue: [string, boolean | number] | undefined = undefined;
  switch (type) {
    case 'CHANGE_BOOL_SECTION':
      filterSection = filter[section];
      if (typeof filterSection !== 'object') {
        break;
      }
      posCurrentValue = Object.entries(filterSection).find((el) => el[0] === position);
      if (posCurrentValue !== undefined && typeof position !== 'undefined') {
        filterSection = {
          ...filterSection,
          [position]: !posCurrentValue[1],
        };
      }
      return {
        ...filter,
        [section]: filterSection,
      };
    case 'CHANGE_RANGE_SECTION':
      filterSection = filter[section];
      if (typeof filterSection !== 'object') {
        break;
      }
      if ((section === 'rangeNum' || section === 'rangeYear') && typeof value === 'object') {
        filterSection = {
          ...filterSection,
          left: value[0],
          right: value[1],
        };
      }
      return {
        ...filter,
        [section]: filterSection,
      };
    case 'CHANGE_VALUE':
      if (!['sort', 'music', 'snow', 'searchSample'].includes(section)) {
        break;
      }
      return {
        ...filter,
        [section]: value,
      };
    default:
      break;
  }
  return filter;
}

export default FilterContext;

export interface IFilterReducerValues {
  type: string;
  payload: {
    section:
      | 'shapes'
      | 'colors'
      | 'sizes'
      | 'fav'
      | 'rangeNum'
      | 'rangeYear'
      | 'sort'
      | 'music'
      | 'snow'
      | 'searchSample';
    position?: filterPositions | 'left' | 'right' | 'step';
    value?: number | string | boolean | [number, number];
  };
}

type IShapesElems = 'ball' | 'bell' | 'cone' | 'snow' | 'toy';
type IColorsElems = 'white' | 'yellow' | 'red' | 'blue' | 'green';
type ISizesElems = 'small' | 'medium' | 'big';
type iFavElems = 'favorite';
export type filterPositions = IShapesElems | IColorsElems | ISizesElems | iFavElems;

export interface IFilter {
  shapes: {
    ball: boolean;
    bell: boolean;
    cone: boolean;
    snow: boolean;
    toy: boolean;
  };
  colors: {
    white: boolean;
    yellow: boolean;
    red: boolean;
    blue: boolean;
    green: boolean;
  };
  sizes: {
    small: boolean;
    medium: boolean;
    big: boolean;
  };
  fav: {
    favorite: boolean;
  };
  rangeNum: {
    left: number;
    right: number;
    readonly step: number;
  };
  rangeYear: {
    left: number;
    right: number;
    readonly step: number;
  };
  sort: number;
  music: boolean;
  snow: boolean;
  searchSample: string;
}
