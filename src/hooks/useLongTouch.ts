import { TouchEvent, useCallback, useRef, useState } from 'react';

const useLongTouch = (
  onLongTouch: () => void,
  onClick: () => void,
  { shouldPreventDefault = true, delay = 250 } = {}
) => {
  const [longPressTriggered, setLongPressTriggered] = useState(false);
  const timeout = useRef<NodeJS.Timeout | null>(null);
  const target = useRef<EventTarget>();

  const start = useCallback(
    (event: Event, params: unknown[]) => {
      if (shouldPreventDefault && event.target) {
        // event.target.addEventListener('touchend', preventDefault, {
        //   passive: false,
        // });
        target.current = event.target;
      }
      timeout.current = setTimeout(() => {
        onLongTouch(event, ...params);
        setLongPressTriggered(true);
      }, delay);
    },
    [onLongTouch, delay, shouldPreventDefault]
  );

  const clear = useCallback(
    (event: Event, params: unknown[]) => {
      timeout.current && clearTimeout(timeout.current);
      !longPressTriggered && onClick(event, ...params);
      setLongPressTriggered(false);
      if (shouldPreventDefault && target.current) {
        target.current.removeEventListener('touchend', preventDefault);
      }
    },
    [shouldPreventDefault, onClick, longPressTriggered]
  );

  return (params: unknown[]) => ({
    onTouchStart: (e) => start(e, params),
    onTouchEnd: (e: Event) => clear(e, params),
  });
};

const preventDefault = (event: Event | TouchEvent) => {
  if (!('touches' in event)) return;
  if (event.touches.length < 2 && event.preventDefault) {
    event.preventDefault();
  }
};

export default useLongTouch;
