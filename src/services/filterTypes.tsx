export interface IChangeFilter {
  section: filterSections;
  position: filterPositions;
}

export type filterSections = 'shapes' | 'colors' | 'sizes' | 'fav';
export type filterSectionObject = IShapes | IColors | ISizes | IFav;
export type filterPositions = IShapesElems | IColorsElems | ISizesElems | iFavElems;

export const createIChangeFilter = (
  section: filterSections,
  position: filterPositions
): IChangeFilter => {
  return { section: section, position: position };
};

export interface IFilter {
  shapes: IShapes;
  colors: IColors;
  sizes: ISizes;
  fav: IFav;
}

interface IShapes {
  ball: boolean;
  bell: boolean;
  cone: boolean;
  snow: boolean;
  toy: boolean;
}

interface IColors {
  white: boolean;
  yellow: boolean;
  red: boolean;
  blue: boolean;
  green: boolean;
}

interface ISizes {
  small: boolean;
  medium: boolean;
  big: boolean;
}

interface IFav {
  favorite: boolean;
}

type IShapesElems = 'ball' | 'bell' | 'cone' | 'snow' | 'toy';
type IColorsElems = 'white' | 'yellow' | 'red' | 'blue' | 'green';
type ISizesElems = 'small' | 'medium' | 'big';
type iFavElems = 'favorite';

export type filterPosOrUndefined = [string, boolean] | undefined;

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
