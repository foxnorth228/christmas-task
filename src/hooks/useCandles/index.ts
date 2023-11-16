import React from 'react';
import CandleContext, { ICandlesReducerValue } from '@contexts/CandleContext';

const useCandles = (): [number[], (value: ICandlesReducerValue) => void] => {
  const [candles, setCandles] = React.useContext(CandleContext);
  return [candles, setCandles];
};

export default useCandles;
