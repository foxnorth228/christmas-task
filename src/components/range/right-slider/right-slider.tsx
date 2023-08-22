import React, { useRef } from 'react';
import { RangeParameter, SliderParameter } from '../range';
import Slider from '@components/range/slider/slider';
import './right-slider.scss';

interface IRightSlider {
  sliderParams: SliderParameter;
}

function RightSlider({ sliderParams }: IRightSlider) {
  const ref = useRef<HTMLDivElement>(null);
  const shiftFunc = (params: RangeParameter, pos: number) =>
    ((params.rightPos - pos) / (params.rightPos - params.leftPos)) * 100;
  return (
    <Slider
      refer={ref}
      sliderParams={sliderParams}
      shiftFunc={shiftFunc}
      isLeftPos={false}
    ></Slider>
  );
}

export default RightSlider;
