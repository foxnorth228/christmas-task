import React, { useRef } from 'react';
import './filter-page-interactions.scss';

const FilterPageInteractions = () => {
  const audio = useRef<HTMLAudioElement>(null);
  return (
    <>
      <div
        className="filterInteraction__music"
        onClick={() => {
          audio!.current!.volume = 0.01;
          if (audio!.current!.paused) {
            console.log(audio!.current!.paused);
            audio!.current!.play();
          } else {
            audio!.current!.pause();
          }
          return;
        }}
      >
        <audio ref={audio} src="./audio/audio.mp3"></audio>
      </div>
      <div className="filterInteraction__snow"></div>
    </>
  );
};

export default FilterPageInteractions;
