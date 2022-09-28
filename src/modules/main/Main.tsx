import React, { useReducer, Dispatch } from 'react';
import './main.css';

import StartPage from '../pages/startPage/startPage';
import ToyPage from '../pages/toyPage/toyPage';
import TreePage from '../pages/treePage/treePage';

interface PageHook {
  page: number;
  changePage: Dispatch<React.SetStateAction<number>>;
}

function Main({ page, changePage }: PageHook) {
  const [filterShape, setFilterShape] = useReducer(filterReducer, FilterCreation());
  const pages = [
    <StartPage key="0" changePage={changePage} />,
    <ToyPage key="1" filter={filterShape} changeToyFilter={setFilterShape} />,
    <TreePage key="2" />,
  ];
  return (
    <>
      <main className="mainBody">{pages[page]}</main>
    </>
  );
}

export default Main;

function FilterCreation(): IFilter {
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

function filterReducer(state: IFilter, action: IChangeFilter) {
  let a = state[action.type];
  if (action.elem in a) {
    const b: [string, boolean] | undefined = Object.entries(a).find((el) => el[0] === action.elem);
    if (b) {
      a = { ...a, [action.elem]: !b[1] };
    }
    console.log(a);
  }
  return { ...state, [action.type]: a };
}

export interface IChangeFilter {
  type: 'shapes' | 'colors' | 'sizes' | 'fav';
  elem: IShapesElems | IColorsElems | ISizesElems | iFavElems;
}

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
