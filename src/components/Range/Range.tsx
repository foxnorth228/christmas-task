import React, { useState, useRef, useEffect, useReducer } from 'react';
import './Range.scss';
import RightSlider from './RightSlider/RightSlider';
import LeftSlider from './LeftSlider/LeftSlider';
import useWindowSize from '@src/hooks/useWindowResize';
import getHtmlElemWidth from '@src/services/getHtmlWidth';

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
  const refScopeLineWidth = useRef<number>(0);
  useWindowSize(
    [refBaseLine, refSlider, refScopeLine],
    [refBaseWidth, refSliderWidth, refScopeLineWidth],
    forceUpdate
  );
  useEffect(() => {
    if (!(refBaseLine.current && refSlider.current && refScopeLine.current)) {
      return;
    }
    refBaseWidth.current = getHtmlElemWidth(refBaseLine.current);
    const sliderWidth = getHtmlElemWidth(refSlider.current);
    refScopeLineWidth.current = getHtmlElemWidth(refScopeLine.current);
    step.current = (refBaseWidth.current - sliderWidth) / (endPos - startPos);
  }, []);

  const scopelineWidth = refScopeLineWidth.current;

  const scale2 =
    (params.rightPos - endPos + startPos - params.leftPos) / (params.rightPos - params.leftPos);
  const scale = (endPos - startPos) / (params.rightPos - params.leftPos);
  const scaleX = (scopelineWidth * scale + 20 * scale2) / scopelineWidth;
  const translate = ((startPos - params.leftPos) / (params.rightPos - params.leftPos)) * 100;
  const translateX = (scopelineWidth * translate - 20 * translate) / scopelineWidth;
  return (
    <div className="Range">
      <span style={{ order: 1 }}>{startPos}</span>
      <div style={{ order: 3 }} className="Range__bodyContainer">
        <div ref={refBaseLine} className="Range__baseLine"></div>
        <LeftSlider
          params={params}
          refer={refSlider}
          pos={startPos}
          secondPos={endPos}
          step={step}
          setPos={setStartPos}
          refBaseWidth={refScopeLineWidth}
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
          refBaseWidth={refScopeLineWidth}
        />
      </div>
      <span style={{ order: 2 }}>{endPos}</span>
    </div>
  );
}

export default Range;
