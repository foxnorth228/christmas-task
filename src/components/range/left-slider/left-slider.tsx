import React from 'react';
import { RangeParameter, SliderParameter } from '../range';
import Slider from '@components/range/slider/slider';
import './left-slider.scss';

interface ILeftSlider {
  refer: React.RefObject<HTMLDivElement>;
  sliderParams: SliderParameter;
}

function LeftSlider({ refer: ref, sliderParams }: ILeftSlider) {
  const shiftFunc = (params: RangeParameter, pos: number) =>
    ((pos - params.leftPos) / (params.rightPos - params.leftPos)) * 100;
  return (
    <Slider refer={ref} sliderParams={sliderParams} shiftFunc={shiftFunc} isLeftPos={true}></Slider>
  );
}

export default LeftSlider;
