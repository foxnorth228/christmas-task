import React, { useRef, Dispatch, SetStateAction } from 'react';
import { RangeParameter } from '../Range';
import Slider from '@components/Range/Slider/slider';

interface IRightSlider {
  pos: number;
  secondPos: number;
  params: RangeParameter;
  step: React.MutableRefObject<number>;
  setPos: Dispatch<SetStateAction<number>>;
}

function RightSlider({ pos, params, secondPos, step, setPos }: IRightSlider) {
  const refEndSlider = useRef<HTMLDivElement>(null);
  const shiftFunc = (params: RangeParameter, pos: number) =>
    ((params.rightPos - pos) / (params.rightPos - params.leftPos)) * 100;
  return (
    <Slider
      refer={refEndSlider}
      pos={pos}
      secondPos={secondPos}
      params={params}
      step={step}
      setPos={setPos}
      shiftFunc={shiftFunc}
      isLeftPos={false}
    ></Slider>
  );
}

export default RightSlider;
