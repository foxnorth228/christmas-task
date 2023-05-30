import React, { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';
import { onSliderDown, sliderMove, sliderUp } from '../sliderFunctions';
import { RangeParameter } from '../Range';

interface ILeftSlider {
  refer: React.RefObject<HTMLDivElement>;
  pos: number;
  secondPos: number;
  params: RangeParameter;
  step: React.MutableRefObject<number>;
  setPos: Dispatch<SetStateAction<number>>;
}

function LeftSlider({ refer: ref, pos, secondPos, params, step, setPos }: ILeftSlider) {
  const refAnimFrame = useRef(0);
  const refIsPushedDown = useRef(false);
  const [shift, setShift] = useState(pos);
  const [isCanBeMoved, setIsCanBeMoved] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function onSliderMove(event: MouseEvent) {
    sliderMove(event, ref, pos, secondPos, params, step, true, setPos);
  }

  function onSliderUp() {
    ref!.current!.style.backgroundImage = '';
    ref!.current!.style.boxShadow = '';
    window.cancelAnimationFrame(refAnimFrame.current);
    refIsPushedDown.current = false;
    sliderUp(pos, setIsCanBeMoved, onSliderMove, onSliderUp);
  }

  function gradientAnimation() {
    ref!.current!.style.backgroundImage =
      'radial-gradient(circle at center, white 0%, rgb(215,215,215) 55%, rgb(55, 55, 55) 95%)';
    ref!.current!.style.boxShadow = '0px 0px 7px -1px rgb(20,20,20)';
    refAnimFrame.current = window.requestAnimationFrame(gradientAnimation);
  }

  useEffect(() => {
    setShift((pos - params.leftPos) * step.current);
    console.log('shift', shift, step.current, pos);
  }, [pos, step]);

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
      ref={ref}
      className="Range__slider Range__rightSlider"
      style={{ left: shift }}
      onMouseDown={(e) => {
        refIsPushedDown.current = true;
        window.cancelAnimationFrame(refAnimFrame.current);
        refAnimFrame.current = window.requestAnimationFrame(gradientAnimation);
        onSliderDown(e, setIsCanBeMoved, onSliderUp);
      }}
      onMouseEnter={() => {
        if (!refIsPushedDown.current) {
          refAnimFrame.current = window.requestAnimationFrame(gradientAnimation);
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
  );
}

export default LeftSlider;
