import React, { useState, useRef, useEffect } from 'react';
import './Range.scss';
import RightSlider from './RightSlider/RightSlider';
import LeftSlider from './LeftSlider/LeftSlider';

export interface RangeParameter {
  leftPos: number;
  rightPos: number;
  step: number;
}

function Range({ params }: { params: RangeParameter }) {
  const [startPos, setStartPos] = useState(params.leftPos);
  const [endPos, setEndPos] = useState(params.rightPos);

  const refSlider = useRef<HTMLDivElement>(null);
  const refBaseLine = useRef<HTMLDivElement>(null);
  const step = useRef(10);
  const refBaseWidth = useRef<number>(0);

  useEffect(() => {
    if (refBaseLine.current && refSlider.current) {
      const baseWidth = Number.parseInt(
        window.getComputedStyle(refBaseLine.current).getPropertyValue('width')
      );
      const sliderWidth = Number.parseInt(
        window.getComputedStyle(refSlider.current).getPropertyValue('width')
      );
      refBaseWidth.current = baseWidth;
      step.current = (baseWidth - sliderWidth) / (endPos - startPos);
    }
  }, []);

  const scalePos = params.rightPos - endPos + startPos - params.leftPos;
  const scaleX = (refBaseWidth.current - step.current * scalePos) / refBaseWidth.current;
  const translateX = (startPos - params.leftPos) * step.current;
  return (
    <div className="Range">
      <span style={{ order: 1 }}>{startPos}</span>
      <div style={{ order: 3 }} ref={refBaseLine} className="Range__baseLine">
        <LeftSlider
          params={params}
          refer={refSlider}
          pos={startPos}
          secondPos={endPos}
          step={step}
          setPos={setStartPos}
        />
        <div
          style={{
            transformOrigin: 'left',
            transform: `translate(${translateX}px) scaleX(${scaleX})`,
          }}
          className="Range__scopeLine"
        ></div>
        <RightSlider
          params={params}
          pos={endPos}
          secondPos={startPos}
          step={step}
          setPos={setEndPos}
        />
      </div>
      <span style={{ order: 2 }}>{endPos}</span>
    </div>
  );
}

export default Range;
