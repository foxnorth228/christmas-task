import { useEffect, useState } from 'react';

const usePageLoaded = () => {
  const [isPageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    setPageLoaded(true);
  }, []);
  return isPageLoaded;
};

export default usePageLoaded;
