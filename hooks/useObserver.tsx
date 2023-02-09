import { useEffect, useRef } from 'react';

type Callback = (entry: IntersectionObserverEntry) => void;
const createObserver = (callback: Callback) => {
  return new IntersectionObserver(([entry]) => callback(entry));
};

const useObserver = (callback: Callback) => {
  const observerRef = useRef(createObserver(callback));

  useEffect(() => {
    const observer = createObserver(callback);
    observerRef.current = observer;
    return () => observer.disconnect();
  }, [callback]);

  return observerRef.current;
};
export default useObserver;
