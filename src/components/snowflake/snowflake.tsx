import React, { useRef } from 'react';
import './snowflake.scss';

const Snowflake = () => {
  const opacity = useRef(Math.random() * (1 - 0.7) + 0.7);
  const animSpeedY = useRef(Math.random() * (23 - 17) + 17);
  const animSpeedX = useRef(Math.random() * (6.5 - 3.5) + 3.5);
  const animSpeedRotate = useRef(Math.random() * (7 - 4.5) + 4.5);
  const animDelay = useRef(Math.floor(Math.random() * 17000));
  const size = useRef(Math.floor(Math.random() * (60 - 40) + 40));
  const posLeft = useRef(Math.random() * 100);
  const type = useRef(Math.ceil(Math.random() * 6));
  return (
    <div
      className="snowflake__container_y"
      style={
        {
          '--size': `${size.current}px`,
          left: `${posLeft.current}%`,
          opacity: `${opacity.current}`,
          animationDuration: `${animSpeedY.current}s`,
          animationDelay: `${animDelay.current}ms`,
        } as React.CSSProperties
      }
    >
      <div style={{ animationDuration: `${animSpeedX.current}s` }} className="snowflake__container_x">
        <div
          style={{
            maskImage: `url("./snow/snow-${type.current}.svg")`,
            WebkitMaskImage: `url("./snow/snow-${type.current}.svg")`,
            animationDuration: `${animSpeedRotate.current}s`,
          }}
          className="snowflake"
        ></div>
      </div>
    </div>
  );
};

export default Snowflake;
