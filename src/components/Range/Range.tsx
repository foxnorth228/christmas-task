import React, { useState, useRef, useEffect, useReducer } from 'react';
import './Range.scss';
import RightSlider from './RightSlider/RightSlider';
import LeftSlider from './LeftSlider/LeftSlider';
import useWindowSize from '@src/hooks/useWindowResize';

export interface RangeParameter {
  leftPos: number;
  rightPos: number;
  step: number;
}

function Range({ params }: { params: RangeParameter }) {
  const [, forceUpdate] = useReducer((x) => x + 1.0, 0);
  const [startPos, setStartPos] = useState(params.leftPos);
  const [endPos, setEndPos] = useState(params.rightPos);

  const refSlider = useRef<HTMLDivElement>(null);
  const refBaseLine = useRef<HTMLDivElement>(null);
  const refScopeLine = useRef<HTMLDivElement>(null);

  const step = useRef(10);
  const refBaseWidth = useRef<number>(0);
  const refSliderWidth = useRef<number>(0);

  useWindowSize([refBaseLine, refScopeLine], [refBaseWidth, refSliderWidth], forceUpdate);
  useEffect(() => {
    if (refBaseLine.current && refSlider.current) {
      refBaseWidth.current = Number.parseInt(
        window.getComputedStyle(refBaseLine.current).getPropertyValue('width')
      );
      refSliderWidth.current = Number.parseInt(
        window.getComputedStyle(refSlider.current).getPropertyValue('width')
      );
      step.current = (refBaseWidth.current - refSliderWidth.current) / (endPos - startPos);
    }
  });

  let scopelineWidth = 0;
  if (refScopeLine.current) {
    scopelineWidth = Number.parseInt(
      window.getComputedStyle(refScopeLine.current).getPropertyValue('width')
    );
  }

  const scale2 =
    (params.rightPos - endPos + startPos - params.leftPos) / (params.rightPos - params.leftPos);
  const scale = (endPos - startPos) / (params.rightPos - params.leftPos);
  const scaleX = (scopelineWidth * scale + 20 * scale2) / scopelineWidth;
  const translate = ((startPos - params.leftPos) / (params.rightPos - params.leftPos)) * 100;
  const translateX = (scopelineWidth * translate - 20 * 100 * scale2) / scopelineWidth;
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
          ref={refScopeLine}
          style={{
            transformOrigin: 'left',
            transform: `translate(${translateX}%) scaleX(${scaleX})`,
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
