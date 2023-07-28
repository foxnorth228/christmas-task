import React from 'react';
import { toy } from '@interfaces/toy';

interface IToysContext {
  toys: toy[];
  toysReducer: IToysReducer;
}

const ToysContext = React.createContext<IToysContext>({
  toys: [],
  toysReducer() {
    return;
  },
});

export default ToysContext;

interface IToysReducerValue {
  type: string;
  payload: number;
}

export type IToysReducer = ({ type, payload }: IToysReducerValue) => void;
export const ToysReducer = (toys: toy[], value: IToysReducerValue) => {
  let toyIndex;
  switch (value.type) {
    case 'SELECTED':
      toyIndex = toys.findIndex((el) => el.num === value.payload);
      if (typeof toyIndex === 'undefined') {
        break;
      }
      console.log('select', toyIndex);
      toys[toyIndex].selected = !toys[toyIndex].selected;
      break;
    default:
      break;
  }
  return toys;
};
