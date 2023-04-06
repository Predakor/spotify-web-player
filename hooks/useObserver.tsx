import { useEffect, useRef } from 'react';

type ObserverCallback = (entry: IntersectionObserverEntry) => void;
const createObserver = (callback: ObserverCallback) => {
  return new IntersectionObserver(([entry]) => callback(entry));
};

const useObserver = (callback: ObserverCallback) => {
  const observerRef = useRef(createObserver(callback));

  useEffect(() => {
    const observer = createObserver(callback);
    observerRef.current = observer;
    return () => observer.disconnect();
  }, [callback]);

  return observerRef.current;
};
export default useObserver;
