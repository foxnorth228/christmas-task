import React from 'react';
import ToysContext, { IToysReducer } from '@contexts/toys-context';
import { toy } from '@interfaces/toy';

const useToys = (): [toy[], IToysReducer] => {
  const { toys, toysReducer } = React.useContext(ToysContext);
  return [toys, toysReducer];
};

export default useToys;
