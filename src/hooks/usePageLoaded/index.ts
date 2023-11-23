import React, { useLayoutEffect, useState } from 'react';

const usePageLoaded = () => {
  const [isPageLoaded, setPageLoaded] = useState(false);
  useLayoutEffect(() => {
    const loadPage = () => {
      setPageLoaded(true);
    };
    document.addEventListener('DOMContentLoaded', loadPage);
    return () => document.removeEventListener('DOMContentLoaded', loadPage);
  }, []);
  return isPageLoaded;
};

export default usePageLoaded;
