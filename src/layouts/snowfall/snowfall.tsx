import React from 'react';
import './snowfall.scss';
import Snowflake from '@components/Snowflake';
import { useFilter } from '@src/store/slices/filterSlice/hooks';
import useMatchMedia from '@hooks/useMatchMedia';

export interface IAnimation {
  duration: number;
  easing: string;
  iterations: number;
  steps: string[];
}

const Snowfall = () => {
  const matches = useMatchMedia('screen and (max-width: 991px)');
  const filter = useFilter();
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
