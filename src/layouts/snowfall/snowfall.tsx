import React, { useEffect, useState } from 'react';
import './snowfall.scss';
import Snowflake from '@components/snowflake/snowflake';
import useFilter from '@hooks/use-filter';

export interface IAnimation {
  duration: number;
  easing: string;
  iterations: number;
  steps: string[];
}

const Snowfall = () => {
  const query = 'screen and (max-width: 991px)';
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (matches !== media.matches) {
      setMatches(media.matches);
    }

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  const [filter] = useFilter();
  const count = matches ? 20 : 60;
  const countArr = new Array(count).fill(0);
  return (
    <section style={{ display: filter.snow ? '' : 'none' }} className="snowfall">
      {countArr.map((_, i) => (
        <Snowflake key={i} />
      ))}
    </section>
  );
};

export default Snowfall;
