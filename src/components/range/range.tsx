import React, { useState, useRef, useReducer } from 'react';
import './range.scss';
import RightSlider from '@components/range/right-slider/right-slider';
import LeftSlider from '@components/range/left-slider/left-slider';
import useWindowSize from '@src/hooks/useWindowResize';

export interface RangeParameter {
  leftPos: number;
  rightPos: number;
  step: number;
}

export interface SliderParameter {
  params: RangeParameter;
  pos: number;
  secondPos: number;
  step: React.MutableRefObject<number>;
  setPos: React.Dispatch<React.SetStateAction<number>>;
}

function Range({ params }: { params: RangeParameter }) {
  const [startPos, setStartPos] = useState(params.leftPos);
  const [endPos, setEndPos] = useState(params.rightPos);

  const step = useRef(10);

  const [, forceUpdate] = useReducer((x) => x + 1.0, 0);
  const refSlider = useRef<HTMLDivElement>(null);
  const refBaseLine = useRef<HTMLDivElement>(null);
  useWindowSize(refBaseLine, refSlider, step, params, forceUpdate);

  const scale = (endPos - startPos) / (params.rightPos - params.leftPos);
  const translate = ((startPos - params.leftPos) / (params.rightPos - params.leftPos)) * 100;
  return (
    <div className="range">
      <span style={{ order: 1 }}>{startPos}</span>
      <div style={{ order: 3 }} className="range__body">
        <div ref={refBaseLine} className="range__baseLine"></div>
        <LeftSlider
          refer={refSlider}
          sliderParams={{
            params,
            pos: startPos,
            secondPos: endPos,
            step,
            setPos: setStartPos,
          }}
        />
        <div
          style={{
            transformOrigin: 'left',
            transform: `translate(${translate}%) scaleX(${scale})`,
          }}
          className="range__scopeLine"
        ></div>
        <RightSlider
          sliderParams={{
            params,
            pos: endPos,
            secondPos: startPos,
            step,
            setPos: setEndPos,
          }}
        />
      </div>
      <span style={{ order: 2 }}>{endPos}</span>
    </div>
  );
}

export default Range;
