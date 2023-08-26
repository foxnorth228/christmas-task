import React from 'react';
import './snowfall.scss';
import Snowflake from '@components/snowflake/snowflake';

export interface IAnimation {
  duration: number;
  easing: string;
  iterations: number;
  steps: string[];
}

const Snowfall = () => {
  const count = 100;
  const countArr = new Array(count).fill(0);
  return (
    <section className="snowfall">
      {countArr.map((_, i) => (
        <Snowflake key={i} />
      ))}
    </section>
  );
};

export default Snowfall;
