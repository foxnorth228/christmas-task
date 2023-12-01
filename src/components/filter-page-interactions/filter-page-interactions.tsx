import React from 'react';
import './filter-page-interactions.scss';
import clickIcon from '@utils/icons/clickIcon';
import { useFilterChangeValue } from '@src/store/slices/filterSlice/hooks';

const FilterPageInteractions = () => {
  const [filter, setFilter] = useFilterChangeValue();
  return (
    <>
      <div
        className={`filterInteraction__music ${
          !filter.music ? 'filterInteraction__music_muted' : ''
        }`}
        onClick={() => {
          setFilter({ section: 'music', value: !filter.music });
        }}
      ></div>
      <div
        className={`filterInteraction__snow ${filter.snow ? 'iconSvg_clicked' : ''}`}
        onClick={(e) => {
          clickIcon(e.currentTarget);
          setFilter({ section: 'snow', value: !filter.snow });
        }}
      ></div>
    </>
  );
};

export default FilterPageInteractions;
