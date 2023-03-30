import { useEffect, useState } from 'react';
import useInterval from './useInterval';

function useProgressInterval(start: number, end: number, paused: boolean) {
  const [progress, setProgress] = useState(start);

  useEffect(() => {
    setProgress(start);
  }, [start]);

  const incrementProgress = () =>
    setProgress((prev) => {
      const newProgress = prev + 1000;
      if (newProgress >= end) return 0;
      return newProgress;
    });

  useInterval(incrementProgress, paused ? null : 1000);

  return progress;
}
export default useProgressInterval;
