import getHtmlElemWidth from '@src/services/getHtmlWidth';
import React, { useLayoutEffect } from 'react';

export const useWindowSize = (
  arrRefHtml: React.RefObject<HTMLElement>[],
  arrRefNum: React.MutableRefObject<number>[],
  forceUpdate: React.DispatchWithoutAction
) => {
  useLayoutEffect(() => {
    function updateSize() {
      for (let i = 0; i < arrRefHtml.length; ++i) {
        const refHtml = arrRefHtml[i].current;
        if (refHtml) {
          arrRefNum[i].current = getHtmlElemWidth(refHtml);
        }
      }
      forceUpdate();
    }
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [arrRefHtml, arrRefNum, forceUpdate]);
};

export default useWindowSize;
