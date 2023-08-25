import React, { useRef } from 'react';
import './snowflake.scss';

const Snowflake = () => {
  const type = useRef(Math.ceil(Math.random() * 6));
  return (
    <div
      style={{
        maskImage: `url("./snow/snow-${type.current}.svg")`,
        WebkitMaskImage: `url("./snow/snow-${type.current}.svg")`,
      }}
      className="snowflake"
    ></div>
  );
};

export default Snowflake;
