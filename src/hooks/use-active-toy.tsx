import { useContext } from 'react';
import ActiveToyContext from '@contexts/active-toy-context';

const useActiveToy = () => {
  return useContext(ActiveToyContext);
};

export default useActiveToy;
