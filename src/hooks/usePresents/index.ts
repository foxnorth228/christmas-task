import React from 'react';
import PresentContext, { IPresent, IPresentsReducerValue } from '@contexts/PresentContext';

const usePresents = (): [IPresent[], (value: IPresentsReducerValue) => void] => {
  const [presents, setPresents] = React.useContext(PresentContext);
  return [presents, setPresents];
};

export default usePresents;
