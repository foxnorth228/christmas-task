import { useContext } from 'react';
import ActiveToyContext from '@contexts/ActiveToyContext';

const useActiveToy = () => {
  return useContext(ActiveToyContext);
};

export default useActiveToy;
