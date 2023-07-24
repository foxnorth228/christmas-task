export interface IChangeFilter {
  section: 'shapes' | 'colors' | 'sizes' | 'fav';
  position: filterPositions;
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
}
