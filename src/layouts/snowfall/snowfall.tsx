import React from 'react';
import './snowfall.scss';
import Snowflake from '@components/snowflake/snowflake';

const Snowfall = () => {
  const count = 20;
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
