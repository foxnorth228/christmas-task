import { useContext } from 'react';
import ActiveCandleContext from '@contexts/ActiveCandleContext';

const useActiveCandle = () => {
  return useContext(ActiveCandleContext);
};

export default useActiveCandle;
