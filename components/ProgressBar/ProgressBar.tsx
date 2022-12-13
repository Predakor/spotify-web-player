import { msToText } from '@utils/time';
import { ChangeEvent, useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import spotifyApi from '../../utils/spotify';

export interface ProgressBarProps {
  current: number;
  duration: number;
}

const ProgressBar = ({ current, duration }: ProgressBarProps) => {
  const [trackProgress, setTrackProgress] = useState(current);
  const [selectedProgress, setSelectedProgress] = useState<number | undefined>(
    undefined
  );

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedProgress(e.currentTarget.valueAsNumber);
  };

  useEffect(() => {
    if (!selectedProgress) return;
    const time = setTimeout(() => {
      spotifyApi.seek(selectedProgress);
      setTrackProgress(selectedProgress);
    }, 150);

    return () => clearInterval(time);
  }, [selectedProgress]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTrackProgress((oldProgress) => oldProgress + 1000);
    }, 1000);
    setTrackProgress(current);
    return () => clearInterval(intervalId);
  }, [current, duration]);

  return (
    <div className="relative flex gap-2">
      <span>{msToText(trackProgress)}</span>
      <input
        className="flex-1 rounded hover:z-20"
        type="range"
        min={0}
        value={trackProgress}
        max={duration}
        onChange={changeHandler}
      />
      <span>{msToText(duration)}</span>
    </div>
  );
};
export default ProgressBar;
