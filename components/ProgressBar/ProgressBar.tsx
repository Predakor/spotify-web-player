import { msToText } from '@utils/time';
import { ChangeEvent, useEffect, useState } from 'react';
import spotifyApi from '@utils/spotify';
import { useSelector } from 'react-redux';
import { selectPlayback } from '@store/playbackSlice';

export interface ProgressBarProps {
  current: number;
  duration: number;
  onSongEnd: VoidFunction;
}

const ProgressBar = ({ duration, onSongEnd }: ProgressBarProps) => {
  const { is_playing, progress_ms, timestamp } = useSelector(selectPlayback);

  const [trackProgress, setTrackProgress] = useState(progress_ms || 0);
  const [selectedProgress, setSelectedProgress] = useState<number>(duration);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedProgress(e.currentTarget.valueAsNumber);
  };

  useEffect(() => {
    if (!selectedProgress) return;
    const time = setTimeout(() => {
      spotifyApi.seek(selectedProgress);
      setTrackProgress(selectedProgress);
    }, 200);

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

    if (is_playing) clearInterval(intervalId);

    return () => clearInterval(intervalId);
  }, [is_playing, onSongEnd]);

  return (
    <div className="flex gap-4 w-5/6 ">
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
