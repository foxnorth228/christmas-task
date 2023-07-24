import React from 'react';
import ToysContext from '@contexts/toys-context';

const useToys = () => {
  return React.useContext(ToysContext);
};

export default useToys;
