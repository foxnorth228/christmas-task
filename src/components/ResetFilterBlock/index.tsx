import React, { useCallback } from 'react';
import './style.scss';
import { filterKeyWord } from '@store/slices/filterSlice';
import { useFilterReset } from '@store/slices/filterSlice/hooks';

const ResetFilterBlock = () => {
  const [, resetFilter] = useFilterReset();

  const onClickResetFilter = useCallback(() => {
    resetFilter();
  }, [resetFilter]);

  const resetSavedSettings = useCallback(() => {
    localStorage.removeItem(filterKeyWord);
  }, []);

  return (
    <div className="resetBlock">
      <button onClick={onClickResetFilter} className="resetBlock__reset">
        Сбросить фильтры
      </button>
      <button onClick={resetSavedSettings} className="resetBlock__reset">
        Сбросить настройки
      </button>
    </div>
  );
};

export default ResetFilterBlock;
