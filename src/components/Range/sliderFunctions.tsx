import React, { Dispatch, SetStateAction } from 'react';
import { RangeParameter } from './Range';

export function onSliderDown(
  setMoved: Dispatch<SetStateAction<boolean>>,
  sliderUp: (event: MouseEvent) => void
) {
  setMoved(true);
  document.body.addEventListener('mouseup', sliderUp);
  return;
}

export function sliderMove(
  event: MouseEvent,
  ref: React.MutableRefObject<HTMLDivElement | null>,
  pos: number,
  secondPos: number,
  rangeParams: RangeParameter,
  step: React.MutableRefObject<number>,
  isLeftMoving: boolean,
  setPos: Dispatch<SetStateAction<number>>
) {
  const rect = ref?.current?.getBoundingClientRect();
  if (rect?.left && rect.left - event.pageX > step.current / 2) {
    if (pos > rangeParams.leftPos && (pos > secondPos || isLeftMoving)) {
      setPos(pos - rangeParams.step);
    }
  }
  if (rect?.right && event.pageX - rect.right > step.current / 2) {
    if (pos < rangeParams.rightPos && (pos < secondPos || !isLeftMoving)) {
      console.log(pos, secondPos, rangeParams.rightPos);
      setPos(pos + rangeParams.step);
    }
  }
}

export function sliderUp(
  refSlider: React.RefObject<HTMLDivElement>,
  refAnimFrame: React.MutableRefObject<number>,
  refIsPushedDown: React.MutableRefObject<boolean>,
  changeMoving: Dispatch<SetStateAction<boolean>>,
  sliderMove: (event: MouseEvent) => void,
  sliderUp: () => void
) {
  refSlider!.current!.style.backgroundImage = '';
  refSlider!.current!.style.boxShadow = '';
  window.cancelAnimationFrame(refAnimFrame.current);
  refIsPushedDown.current = false;
  changeMoving(false);
  document.body.removeEventListener('mousemove', sliderMove);
  document.body.removeEventListener('mouseup', sliderUp);
}

export function gradientAnimation(
  refSlider: React.RefObject<HTMLDivElement>,
  refAnimFrame: React.MutableRefObject<number>
) {
  const animation = () => {
    refSlider!.current!.style.backgroundImage =
      'radial-gradient(circle at center, white 0%, rgb(215,215,215) 55%, rgb(55, 55, 55) 95%)';
    refSlider!.current!.style.boxShadow = '0px 0px 7px -1px rgb(20,20,20)';
    refAnimFrame.current = window.requestAnimationFrame(animation);
  };
  refAnimFrame.current = window.requestAnimationFrame(animation);
}
