// hooks/useIntersectionObserver.ts

import { type RefObject, useEffect, useRef } from 'react';

type IntersectionObserverCallback = () => void;

// Add the generic type parameter <T extends Element>
export function useIntersectionObserver<T extends Element>(
  options: IntersectionObserverInit,
  callback: IntersectionObserverCallback
): RefObject<T | null> {
  // Use the generic type T for the ref
  const targetRef = useRef<T>(null);

  useEffect(() => {
    const element = targetRef.current;
    if (!element) {
      return;
    }

    const onIntersect = (entries: IntersectionObserverEntry[]): void => {
      if (entries[0].isIntersecting) {
        callback();
      }
    };

    const observer = new IntersectionObserver(onIntersect, options);
    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options, callback]);

  return targetRef;
}
