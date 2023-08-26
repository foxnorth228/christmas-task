import React from 'react';
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
  const [filter] = useFilter();
  console.log(filter.snow);
  const count = 60;
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
