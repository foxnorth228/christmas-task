import React, { useCallback } from 'react';
import './style.scss';
import clickIcon from '@utils/icons/clickIcon';
import { useFilterChangeValue } from '@src/store/slices/filterSlice/hooks';

const FilterPageInteractions = () => {
  const [filter, setFilter] = useFilterChangeValue();

  const switchMusic = useCallback(() => {
    setFilter({ section: 'music', value: !filter.music });
  }, [filter.music, setFilter]);

  const switchSnow = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      clickIcon(e.currentTarget);
      setFilter({ section: 'snow', value: !filter.snow });
    },
    [filter.snow, setFilter]
  );
  return (
    <>
      <div
        className={`interaction__music ${!filter.music ? 'interaction__music_muted' : ''}`}
        onClick={switchMusic}
      ></div>
      <div
        className={`interaction__snow ${filter.snow ? 'iconSvg_clicked' : ''}`}
        onClick={switchSnow}
      ></div>
    </>
  );
};

export default FilterPageInteractions;
