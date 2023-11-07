import React from 'react';
import PresentContext, { IPresentsReducerValue } from '@contexts/PresentContext';

const usePresents = (): [number[], (value: IPresentsReducerValue) => void] => {
  const [presents, setPresents] = React.useContext(PresentContext);
  return [presents, setPresents];
};

export default usePresents;
