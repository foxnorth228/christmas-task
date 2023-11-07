import React from 'react';

export interface IPresentsReducerValue {
  type: string;
  payload: number;
}

export const PresentReducer = (presents: number[], value: IPresentsReducerValue) => {
  switch (value.type) {
    case 'ADD':
      if (presents.includes(value.payload)) {
        return presents;
      }
      return [...presents, value.payload];
    case 'DELETE':
      if (!presents.includes(value.payload)) {
        return presents;
      }
      presents.splice(presents.indexOf(value.payload), 1);
      return presents;
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
