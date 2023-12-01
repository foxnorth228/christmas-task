import React, { useEffect } from 'react';
import getHtmlElemWidth from '@services/getHtmlWidth';
import { RangeParameter } from '@components/range/range';

export const useWindowSize = (
  refBaseLine: React.RefObject<HTMLDivElement>,
  refSlider: React.RefObject<HTMLDivElement>,
  step: React.MutableRefObject<number>,
  params: RangeParameter,
  forceUpdate: React.DispatchWithoutAction
) => {
  useEffect(() => {
    if (!(refBaseLine.current && refSlider.current)) {
      return;
    }
    const baseWidth = getHtmlElemWidth(refBaseLine.current);
    const sliderWidth = getHtmlElemWidth(refSlider.current);
    step.current = (baseWidth - sliderWidth) / ((params.rightPos - params.leftPos) / params.step);
    console.log(step.current);
    window.addEventListener('resize', forceUpdate);
    return () => window.removeEventListener('resize', forceUpdate);
  });
};

export default useWindowSize;
