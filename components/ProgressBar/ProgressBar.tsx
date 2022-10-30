import { ChangeEvent, useCallback, useEffect, useState } from 'react';

interface ProgressBarProps {
  current: number;
  duration: number;
}

const ProgressBar = ({ current, duration }: ProgressBarProps) => {
  const [trackProgress, setTrackProgress] = useState(current);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTrackProgress((oldProgress) => oldProgress + 1000);
    }, 1000);
    setTrackProgress(current);
    return () => clearInterval(intervalId);
  }, [current, duration]);

  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTrackProgress(e.target.valueAsNumber);
  }, []);

  return (
    <div className="relative">
      <input
        className="absolute w-full rounded hover:z-20"
        type="range"
        min={0}
        value={trackProgress}
        max={duration}
        onChange={(e) => changeHandler(e)}
      />
    </div>
  );
};
export default ProgressBar;
export type { ProgressBarProps };
