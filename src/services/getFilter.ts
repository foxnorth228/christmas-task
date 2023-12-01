import { IFilter } from '@store/slices/filterSlice/types';

export function FilterCreation(): IFilter {
  return {
    shapes: {
      ball: false,
      bell: false,
      cone: false,
      snow: false,
      toy: false,
    },
    colors: {
      white: false,
      yellow: false,
      red: false,
      blue: false,
      green: false,
    },
    sizes: {
      small: false,
      medium: false,
      big: false,
    },
    fav: {
      favorite: false,
    },
    rangeNum: {
      left: 1,
      right: 12,
      step: 1,
    },
    rangeYear: {
      left: 1940,
      right: 2020,
      step: 10,
    },
    sort: 0,
    music: false,
    snow: false,
    searchSample: '',
  };
}

export default FilterCreation;
