import React, { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';
import { onSliderDown, sliderMove, sliderUp, gradientAnimation } from '../sliderFunctions';
import { RangeParameter } from '../Range';

interface ILeftSlider {
  refer: React.RefObject<HTMLDivElement>;
  pos: number;
  secondPos: number;
  params: RangeParameter;
  step: React.MutableRefObject<number>;
  setPos: Dispatch<SetStateAction<number>>;
  shiftFunc: (param: RangeParameter, pos: number) => number;
  isLeftPos: boolean;
}

const Slider = ({
  refer: ref,
  pos,
  secondPos,
  params,
  step,
  setPos,
  shiftFunc,
  isLeftPos,
}: ILeftSlider) => {
  const refAnimFrame = useRef(0);
  const refIsPushedDown = useRef(false);
  const [shift, setShift] = useState(shiftFunc(params, pos));
  const [isCanBeMoved, setIsCanBeMoved] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function onSliderMove(event: MouseEvent) {
    sliderMove(event, ref, pos, secondPos, params, step, isLeftPos, setPos);
  }

  function onSliderUp() {
    sliderUp(ref, refAnimFrame, refIsPushedDown, setIsCanBeMoved, onSliderMove, onSliderUp);
  }

  useEffect(() => {
    setShift(shiftFunc(params, pos));
  }, [params, params.leftPos, params.rightPos, pos, shiftFunc]);

  useEffect(() => {
    if (isCanBeMoved) {
      document.body.addEventListener('mousemove', onSliderMove);
      return () => {
        document.body.removeEventListener('mousemove', onSliderMove);
      };
    }
  }, [isCanBeMoved, onSliderMove]);

  return (
    <div
      style={{ [isLeftPos ? 'left' : 'right']: `${shift}%` }}
      className="Range__baseLine Range__slider_wrapper"
    >
      <div
        ref={ref}
        className={`Range__slider ${isLeftPos ? 'Range__leftSlider' : 'Range__rightSlider'}`}
        onMouseDown={() => {
          refIsPushedDown.current = true;
          window.cancelAnimationFrame(refAnimFrame.current);
          gradientAnimation(ref, refAnimFrame);
          onSliderDown(setIsCanBeMoved, onSliderUp);
        }}
        onMouseEnter={() => {
          if (!refIsPushedDown.current) {
            gradientAnimation(ref, refAnimFrame);
          }
        }}
        onMouseLeave={() => {
          if (!refIsPushedDown.current) {
            ref!.current!.style.backgroundImage = '';
            ref!.current!.style.boxShadow = '';
            window.cancelAnimationFrame(refAnimFrame.current);
          }
        }}
      ></div>
    </div>
  );
};

export default Slider;
