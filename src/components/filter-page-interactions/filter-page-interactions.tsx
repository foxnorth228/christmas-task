import React, {useRef, useState} from 'react';
import './filter-page-interactions.scss';
import useFilter from '@hooks/use-filter';

const FilterPageInteractions = () => {
  const [filter, setFilter] = useFilter();
  const audio = useRef<HTMLAudioElement>(null);
  const [isAudioPlayed, setIsAudioPlayed] = useState(false);
  return (
    <>
      <div
        className={`filterInteraction__music ${
          !isAudioPlayed ? 'filterInteraction__music_muted' : ''
        }`}
        onClick={() => {
          setFilter({ type: 'CHANGE_VALUE', payload: { section: 'snow', value: !filter.snow } });
          audio!.current!.volume = 0.1;
          if (!isAudioPlayed) {
            audio!.current!.play();
            setIsAudioPlayed(true);
          } else {
            audio!.current!.pause();
            setIsAudioPlayed(false);
          }
          return;
        }}
      >
        <audio ref={audio} src="./audio/audio.mp3"></audio>
      </div>
      <div
        className="filterInteraction__snow"
        onClick={() => {
          setFilter({ type: 'CHANGE_VALUE', payload: { section: 'music', value: !filter.music } });
        }}
      ></div>
    </>
  );
};

export default FilterPageInteractions;
