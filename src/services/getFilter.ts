import { IFilter } from '@utils/filterTypes';

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
  };
}

export default FilterCreation;