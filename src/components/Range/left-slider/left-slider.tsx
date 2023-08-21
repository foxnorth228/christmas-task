import React, { Dispatch, SetStateAction } from 'react';
import { RangeParameter } from '../Range';
import Slider from '@components/Range/Slider/slider';

interface ILeftSlider {
  refer: React.RefObject<HTMLDivElement>;
  pos: number;
  secondPos: number;
  params: RangeParameter;
  step: React.MutableRefObject<number>;
  setPos: Dispatch<SetStateAction<number>>;
}

function LeftSlider({ refer: ref, pos, secondPos, params, step, setPos }: ILeftSlider) {
  const shiftFunc = (params: RangeParameter, pos: number) =>
    ((pos - params.leftPos) / (params.rightPos - params.leftPos)) * 100;
  return (
    <Slider
      refer={ref}
      pos={pos}
      secondPos={secondPos}
      params={params}
      step={step}
      setPos={setPos}
      shiftFunc={shiftFunc}
      isLeftPos={true}
    ></Slider>
  );
}

export default LeftSlider;
