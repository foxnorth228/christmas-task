import React, { useEffect, useRef } from 'react';
import { useFilter } from '@src/store/slices/filterSlice/hooks';

const CustomAudio = () => {
  const filter = useFilter();
  const audio = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!audio.current) {
      return;
    }
    audio.current.volume = 0.1;
    filter.music ? audio.current.play().catch((e) => console.log(e)) : audio.current.pause();
  }, [filter]);

  return <audio ref={audio} src="./audio/audio.mp3" loop={true} />;
};

export default CustomAudio;
