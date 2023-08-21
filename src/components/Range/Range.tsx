import React, { useState, useRef, useEffect, useReducer } from 'react';
import './Range.scss';
import RightSlider from '@components/Range/right-slider/right-slider';
import LeftSlider from '@components/Range/left-slider/left-slider';
import useWindowSize from '@src/hooks/useWindowResize';
import getHtmlElemWidth from '@src/services/getHtmlWidth';

export interface RangeParameter {
  leftPos: number;
  rightPos: number;
  step: number;
}

function Range({ params }: { params: RangeParameter }) {
  const [resize, forceUpdate] = useReducer((x) => x + 1.0, 0);
  const [startPos, setStartPos] = useState(params.leftPos);
  const [endPos, setEndPos] = useState(params.rightPos);

  const refSlider = useRef<HTMLDivElement>(null);
  const refBaseLine = useRef<HTMLDivElement>(null);
  const step = useRef(10);
  useWindowSize(forceUpdate);
  useEffect(() => {
    if (!(refBaseLine.current && refSlider.current)) {
      return;
    }
    const refBaseWidth = getHtmlElemWidth(refBaseLine.current);
    const sliderWidth = getHtmlElemWidth(refSlider.current);
    step.current = (refBaseWidth - sliderWidth) / (params.rightPos - params.leftPos);
  }, [resize, params.leftPos, params.rightPos]);

  const scale = (endPos - startPos) / (params.rightPos - params.leftPos);
  const translate = ((startPos - params.leftPos) / (params.rightPos - params.leftPos)) * 100;
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
        />
        <div
          style={{
            transformOrigin: 'left',
            transform: `translate(${translate}%) scaleX(${scale})`,
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
