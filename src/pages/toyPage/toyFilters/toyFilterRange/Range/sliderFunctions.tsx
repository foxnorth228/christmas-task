import React, { Dispatch, SetStateAction } from 'react';
import { RangeParameter } from './Range';

export function onSliderDown(
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
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
  pos: number,
  changeMoving: Dispatch<SetStateAction<boolean>>,
  sliderMove: (event: MouseEvent) => void,
  sliderUp: () => void
) {
  changeMoving(false);
  document.body.removeEventListener('mousemove', sliderMove);
  document.body.removeEventListener('mouseup', sliderUp);
}
