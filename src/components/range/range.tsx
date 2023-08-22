import React, { useRef, useReducer } from 'react';
import './range.scss';
import RightSlider from '@components/range/right-slider/right-slider';
import LeftSlider from '@components/range/left-slider/left-slider';
import useWindowSize from '@src/hooks/useWindowResize';
import useFilter from '@hooks/use-filter';

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
  setPos: (x: number) => void;
}

function Range({ name, params }: { name: 'rangeNum' | 'rangeYear'; params: RangeParameter }) {
  const [filter, setFilter] = useFilter();
  const step = useRef(10);
  function setFilterLeft(left: number) {
    setFilter({
      type: 'CHANGE_RANGE_SECTION',
      payload: {
        section: name,
        value: [left, filter[name].right],
      },
    });
  }

  function setFilterRight(right: number) {
    setFilter({
      type: 'CHANGE_RANGE_SECTION',
      payload: {
        section: name,
        value: [filter[name].left, right],
      },
    });
  }

  const [, forceUpdate] = useReducer((x) => x + 1.0, 0);
  const refSlider = useRef<HTMLDivElement>(null);
  const refBaseLine = useRef<HTMLDivElement>(null);
  useWindowSize(refBaseLine, refSlider, step, params, forceUpdate);

  const scale = (filter[name].right - filter[name].left) / (params.rightPos - params.leftPos);
  const translate =
    ((filter[name].left - params.leftPos) / (params.rightPos - params.leftPos)) * 100;
  return (
    <div className="range">
      <span style={{ order: 1 }}>{filter[name].left}</span>
      <div style={{ order: 3 }} className="range__body">
        <div ref={refBaseLine} className="range__baseLine"></div>
        <LeftSlider
          refer={refSlider}
          sliderParams={{
            params,
            pos: filter[name].left,
            secondPos: filter[name].right,
            step,
            setPos: setFilterLeft,
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
            pos: filter[name].right,
            secondPos: filter[name].left,
            step,
            setPos: setFilterRight,
          }}
        />
      </div>
      <span style={{ order: 2 }}>{filter[name].right}</span>
    </div>
  );
}

export default Range;
