import React, { useRef } from 'react';
import './snowflake.scss';

const Snowflake = () => {
  const animDelay = useRef(Math.floor(Math.random() * 10000));
  const posLeft = useRef(Math.random() * 100);
  const type = useRef(Math.ceil(Math.random() * 6));
  return (
    <div
      className="snowflake__container_y"
      style={{ left: `${posLeft.current}%`, animationDelay: `${animDelay.current}ms` }}
    >
      <div className="snowflake__container_x">
        <div
          style={{
            maskImage: `url("./snow/snow-${type.current}.svg")`,
            WebkitMaskImage: `url("./snow/snow-${type.current}.svg")`,
          }}
          className="snowflake"
        ></div>
      </div>
    </div>
  );
};

export default Snowflake;
