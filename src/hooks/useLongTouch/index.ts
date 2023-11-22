import { TouchEvent, useCallback, useRef, useState } from 'react';

const useLongTouch = (
  onLongTouch: () => void,
  onClick: () => void,
  { shouldPreventDefault = true, delay = 300 } = {}
) => {
  const [longPressTriggered, setLongPressTriggered] = useState(false);
  const timeout = useRef<NodeJS.Timeout | null>(null);
  const target = useRef<EventTarget>();

  const start = useCallback(
    (event: Event, params: unknown[]) => {
      if (shouldPreventDefault && event.target) {
        event.target.addEventListener('touchend', preventDefault, {
          passive: false,
        });
        target.current = event.target;
      }
      timeout.current = setTimeout(() => {
        onLongTouch(...params);
        setLongPressTriggered(true);
      }, delay);
    },
    [onLongTouch, delay, shouldPreventDefault]
  );

  const clear = useCallback(
    (params: unknown[]) => {
      timeout.current && clearTimeout(timeout.current);
      !longPressTriggered && onClick(...params);
      setLongPressTriggered(false);
      if (shouldPreventDefault && target.current) {
        target.current.removeEventListener('touchend', preventDefault);
      }
    },
    [shouldPreventDefault, onClick, longPressTriggered]
  );

  return (params: unknown[]) => ({
    onTouchStart: (e: Event) => start(e, params),
    onTouchEnd: () => clear(params),
  });
};

const preventDefault = (event: Event | TouchEvent) => {
  if (!('touches' in event)) return;
  if (event.touches.length < 2 && event.preventDefault) {
    event.preventDefault();
  }
};

export default useLongTouch;
