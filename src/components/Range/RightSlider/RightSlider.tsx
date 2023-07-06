import React, { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';
import { onSliderDown, sliderMove, sliderUp } from '../sliderFunctions';
import { RangeParameter } from '../Range';

interface IRightSlider {
  pos: number;
  secondPos: number;
  params: RangeParameter;
  step: React.MutableRefObject<number>;
  setPos: Dispatch<SetStateAction<number>>;
  refBaseWidth: React.RefObject<number>;
}

function RightSlider({ pos, params, secondPos, step, setPos, refBaseWidth }: IRightSlider) {
  const refEndSlider = useRef<HTMLDivElement>(null);
  const refAnimFrame = useRef(0);
  const refIsPushedDown = useRef(false);
  const [shift, setShift] = useState(pos);
  const [isCanBeMoved, setIsCanBeMoved] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function onSliderMove(event: MouseEvent) {
    sliderMove(event, refEndSlider, pos, secondPos, params, step, false, setPos);
  }

  function onSliderUp() {
    refEndSlider!.current!.style.backgroundImage = '';
    refEndSlider!.current!.style.boxShadow = '';
    window.cancelAnimationFrame(refAnimFrame.current);
    refIsPushedDown.current = false;
    sliderUp(pos, setIsCanBeMoved, onSliderMove, onSliderUp);
  }

  function gradientAnimation() {
    refEndSlider!.current!.style.backgroundImage =
      'radial-gradient(circle at center, white 0%, rgb(215,215,215) 55%, rgb(55, 55, 55) 95%)';
    refEndSlider!.current!.style.boxShadow = '0px 0px 7px -1px rgb(20,20,20)';
    refAnimFrame.current = window.requestAnimationFrame(gradientAnimation);
  }

  useEffect(() => {
    if (!refBaseWidth.current) {
      return;
    }
    const translate = ((params.rightPos - pos) / (params.rightPos - params.leftPos)) * 100;
    setShift((refBaseWidth.current * translate - 20 * translate) / refBaseWidth.current);
  }, [params.leftPos, params.rightPos, pos, shift, step]);

  useEffect(() => {
    if (isCanBeMoved) {
      document.body.addEventListener('mousemove', onSliderMove);
      return () => {
        document.body.removeEventListener('mousemove', onSliderMove);
      };
    }
  }, [isCanBeMoved, onSliderMove]);

  return (
    <div style={{ right: `${shift}%` }} className="Range__baseLine Range__slider_wrapper">
      <div
        ref={refEndSlider}
        className="Range__slider Range__rightSlider"
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
            refEndSlider!.current!.style.backgroundImage = '';
            refEndSlider!.current!.style.boxShadow = '';
            window.cancelAnimationFrame(refAnimFrame.current);
          }
        }}
      ></div>
    </div>
  );
}

export default RightSlider;
