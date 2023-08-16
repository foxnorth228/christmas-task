import React, { useEffect, useRef } from 'react';
import useFilter from '@hooks/use-filter';

const CustomAudio = () => {
  const [filter] = useFilter();
  const audio = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    if (!(audio && audio.current)) {
      return;
    }
    if (filter.music) {
      audio.current.volume = 0.1;
      audio.current.play().catch((e) => console.log(e));
    } else {
      audio.current.pause();
    }
  }, [filter]);
  return <audio ref={audio} src="./audio/audio.mp3" loop={true}></audio>;
};

export default CustomAudio;
