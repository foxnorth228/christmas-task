import React from 'react';

export interface IPresentsReducerValue {
  type: string;
  payload: number | number[];
}

export const PresentReducer = (presents: number[], value: IPresentsReducerValue) => {
  switch (value.type) {
    case 'ADD':
      if (typeof value.payload !== 'number') {
        return presents;
      }
      if (presents.includes(value.payload)) {
        return presents;
      }
      return [...presents, value.payload];
    case 'DELETE':
      if (typeof value.payload !== 'number') {
        return presents;
      }
      if (!presents.includes(value.payload)) {
        return presents;
      }
      presents.splice(presents.indexOf(value.payload), 1);
      return presents;
    case 'RESET':
      return [];
    case 'UPDATE':
      if (typeof value.payload === 'number') {
        return presents;
      }
      return value.payload;
    default:
      return presents;
  }
};

const PresentContext = React.createContext<[number[], (value: IPresentsReducerValue) => void]>([
  [],
  () => {
    return;
  },
]);
export default PresentContext;
