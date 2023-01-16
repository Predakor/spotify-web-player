import { msToText } from '@utils/time';
import { ChangeEvent, useEffect, useState } from 'react';
import spotifyApi from '@utils/spotify';

export interface ProgressBarProps {
  current: number;
  duration: number;
  onSongEnd: VoidFunction;
}

const ProgressBar = ({ current, duration, onSongEnd }: ProgressBarProps) => {
  const [trackProgress, setTrackProgress] = useState(current);
  const [selectedProgress, setSelectedProgress] = useState<number>();

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
      setTrackProgress((oldProgress) => {
        const newProgress = oldProgress + 1000;
        if (newProgress < duration) return newProgress;

        clearInterval(intervalId);
        onSongEnd();
        return 0;
      });
    }, 1000);
    setTrackProgress(current);
    return () => clearInterval(intervalId);
  }, [current, duration, onSongEnd]);

  return (
    <div className="flex gap-2 w-full">
      <span>{msToText(trackProgress)}</span>
      <input
        className="flex-1"
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
