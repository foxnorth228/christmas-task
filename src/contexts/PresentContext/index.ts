import React from 'react';

export interface IPresent {
  type: number;
  x: number;
  y: number;
}

export interface IPresentsReducerValue {
  type: string;
  payload: IPresent;
}

export const PresentReducer = (presents: IPresent[], value: IPresentsReducerValue) => {
  let index;
  switch (value.type) {
    case 'ADD':
      if (presents.find((el) => el.type === value.payload.type)) {
        return presents;
      }
      return [...presents, value.payload];
    case 'DELETE':
      if (!presents.find((el) => el.type === value.payload.type)) {
        return presents;
      }
      index = presents.findIndex((el) => el.type === value.payload.type);
      presents.splice(index, 1);
      return presents;
    default:
      return presents;
  }
};

const PresentContext = React.createContext<[IPresent[], (value: IPresentsReducerValue) => void]>([
  [],
  () => {
    return;
  },
]);
export default PresentContext;
