import { useContext } from 'react';
import ActivePresentContext from '@contexts/ActivePresentContext';

const useActivePresent = () => {
  return useContext(ActivePresentContext);
};

export default useActivePresent;
