import React, { useLayoutEffect } from 'react';

export const useWindowSize = (forceUpdate: React.DispatchWithoutAction) => {
  useLayoutEffect(() => {
    window.addEventListener('resize', forceUpdate);
    return () => window.removeEventListener('resize', forceUpdate);
  }, [forceUpdate]);
};

export default useWindowSize;
