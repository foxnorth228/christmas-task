import { useNavigate } from 'react-router';
import { useCallback } from 'react';

const useNavigateTo = (path: string) => {
  const navigate = useNavigate();
  return useCallback(() => {
    navigate(path);
  }, [navigate, path]);
};

export default useNavigateTo;
