import React from 'react';

export interface ICandlesReducerValue {
  type: string;
  payload: number | number[];
}

export const CandleReducer = (candles: number[], value: ICandlesReducerValue) => {
  switch (value.type) {
    case 'ADD':
      if (typeof value.payload !== 'number') {
        return candles;
      }
      if (candles.includes(value.payload)) {
        return candles;
      }
      return [...candles, value.payload];
    case 'DELETE':
      if (typeof value.payload !== 'number') {
        return candles;
      }
      if (!candles.includes(value.payload)) {
        return candles;
      }
      candles.splice(candles.indexOf(value.payload), 1);
      return candles;
    case 'RESET':
      return [];
    case 'UPDATE':
      if (typeof value.payload === 'number') {
        return candles;
      }
      return value.payload;
    default:
      return candles;
  }
};

const CandleContext = React.createContext<[number[], (value: ICandlesReducerValue) => void]>([
  [],
  () => {
    return;
  },
]);

export default CandleContext;
