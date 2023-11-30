export interface ITreeToy {
  x: number;
  y: number;
  type: number;
}

export interface ICandleTree extends ITreeToy {
  isFired: boolean;
  fireplace: Array<{
    x: number;
    y: number;
  }>;
}

export interface ITree {
  tree: number;
  bg: number;
  garland: number;
  garlandMode: number;
  star: number;
  toys: Array<ITreeToy>;
  presents: Array<ITreeToy>;
  candles: Array<ICandleTree>;
}

export function TreeCreation(): ITree {
  return {
    tree: 1,
    bg: 1,
    garland: 1,
    garlandMode: 0,
    star: 1,
    toys: [],
    presents: [],
    candles: [],
  };
}
