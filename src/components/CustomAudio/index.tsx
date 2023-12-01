import React, { useEffect, useRef } from 'react';
import { useFilter } from '@src/store/slices/filterSlice/hooks';

const CustomAudio = () => {
  const volume = 0.1;

  const filter = useFilter();
  const refAudio = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!refAudio.current) {
      return;
    }
    refAudio.current.volume = volume;
    filter.music ? refAudio.current.play().catch((e) => console.log(e)) : refAudio.current.pause();
  }, [filter]);

  return <audio ref={refAudio} src="./audio/audio.mp3" loop={true} />;
};

export default CustomAudio;
