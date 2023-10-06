import React, { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';
import { RangeParameter, SliderParameter } from '../range';
import './slider.scss';

interface ISlider {
  refer: React.RefObject<HTMLDivElement>;
  sliderParams: SliderParameter;
  shiftFunc: (param: RangeParameter, pos: number) => number;
  isLeftPos: boolean;
}

const Slider = ({
  refer: ref,
  sliderParams: { pos, secondPos, params, step, setPos },
  shiftFunc,
  isLeftPos,
}: ISlider) => {
  const [shift, setShift] = useState(shiftFunc(params, pos));
  const [isCanBeMoved, setIsCanBeMoved] = useState(false);
  const refIsPushedDown = useRef(false);

  useEffect(() => {
    setShift(shiftFunc(params, pos));
  }, [params, pos, shiftFunc]);

  useEffect(() => {
    //enable moving every rerender
    if (isCanBeMoved) {
      document.body.addEventListener('touchmove', onTouchMove);
      document.body.addEventListener('mousemove', onSliderMove);
      return () => {
        document.body.removeEventListener('touchmove', onTouchMove);
        document.body.removeEventListener('mousemove', onSliderMove);
      };
    }
  }, [isCanBeMoved, onSliderMove]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function onTouchMove(this: HTMLElement, ev: TouchEvent) {
    touchMove(ev, ref, { pos, secondPos, params, step, setPos }, isLeftPos);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function onSliderMove(event: MouseEvent) {
    sliderMove(event, ref, { pos, secondPos, params, step, setPos }, isLeftPos);
  }

  function onSliderUp() {
    sliderUp(ref, refIsPushedDown, setIsCanBeMoved, onSliderUp);
  }

  return (
    <div
      style={{ [isLeftPos ? 'left' : 'right']: `${shift}%` }}
      className="range__baseLine range__baseLine_wrapper"
    >
      <div
        ref={ref}
        style={{ zIndex: isLeftPos && pos === params.rightPos ? '2' : '1' }}
        className={`range__slider ${isLeftPos ? 'range__slider_left' : 'range__slider_right'}`}
        onTouchStart={() => {
          sliderDown(ref, setIsCanBeMoved, refIsPushedDown, onSliderUp);
        }}
        onMouseDown={() => {
          sliderDown(ref, setIsCanBeMoved, refIsPushedDown, onSliderUp);
        }}
        onMouseEnter={() => {
          if (!refIsPushedDown.current) {
            ref!.current!.classList.add('range__slider_active');
          }
        }}
        onMouseLeave={() => {
          if (!refIsPushedDown.current) {
            ref!.current!.classList.remove('range__slider_active');
          }
        }}
      ></div>
    </div>
  );
};

export default Slider;

function sliderDown(
  refSlider: React.RefObject<HTMLDivElement>,
  setIsCanBeMoved: Dispatch<SetStateAction<boolean>>,
  refIsPushedDown: React.MutableRefObject<boolean>,
  sliderUp: () => void
) {
  refSlider!.current!.classList.add('range__slider_active');
  setIsCanBeMoved(true);
  refIsPushedDown.current = true;
  document.body.addEventListener('mouseup', sliderUp);
  document.body.addEventListener('touchend', sliderUp);
  return;
}

function touchMove(
  event: TouchEvent,
  ref: React.MutableRefObject<HTMLDivElement | null>,
  { pos, secondPos, params, step, setPos }: SliderParameter,
  isLeftMoving: boolean
) {
  const rect = ref?.current?.getBoundingClientRect();
  if (rect?.left && rect.left - event.touches[0].pageX > step.current / 2) {
    if (pos > params.leftPos && (pos > secondPos || isLeftMoving)) {
      setPos(pos - params.step);
    }
  }
  if (rect?.right && event.touches[0].pageX - rect.right > step.current / 2) {
    if (pos < params.rightPos && (pos < secondPos || !isLeftMoving)) {
      setPos(pos + params.step);
    }
  }
}

function sliderMove(
  event: MouseEvent,
  ref: React.MutableRefObject<HTMLDivElement | null>,
  { pos, secondPos, params, step, setPos }: SliderParameter,
  isLeftMoving: boolean
) {
  const rect = ref?.current?.getBoundingClientRect();
  if (rect?.left && rect.left - event.pageX > step.current / 2) {
    if (pos > params.leftPos && (pos > secondPos || isLeftMoving)) {
      setPos(pos - params.step);
    }
  }
  if (rect?.right && event.pageX - rect.right > step.current / 2) {
    if (pos < params.rightPos && (pos < secondPos || !isLeftMoving)) {
      setPos(pos + params.step);
    }
  }
}

function sliderUp(
  refSlider: React.RefObject<HTMLDivElement>,
  refIsPushedDown: React.MutableRefObject<boolean>,
  setIsCanBeMoved: Dispatch<SetStateAction<boolean>>,
  sliderUp: () => void
) {
  refSlider!.current!.classList.remove('range__slider_active');
  refIsPushedDown.current = false;
  setIsCanBeMoved(false);
  document.body.removeEventListener('mouseup', sliderUp);
}
