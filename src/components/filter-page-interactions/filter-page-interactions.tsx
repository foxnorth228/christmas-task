import React from 'react';
import './filter-page-interactions.scss';
import useFilter from '@hooks/use-filter';
import clickIcon from '@utils/icons/clickIcon';

const FilterPageInteractions = () => {
  const [filter, setFilter] = useFilter();
  return (
    <>
      <div
        className={`filterInteraction__music ${
          !filter.music ? 'filterInteraction__music_muted' : ''
        }`}
        onClick={() => {
          setFilter({ type: 'CHANGE_VALUE', payload: { section: 'music', value: !filter.music } });
        }}
      ></div>
      <div
        className="filterInteraction__snow"
        onClick={(e) => {
          clickIcon(e.currentTarget);
          setFilter({ type: 'CHANGE_VALUE', payload: { section: 'snow', value: !filter.snow } });
        }}
      ></div>
    </>
  );
};

export default FilterPageInteractions;
