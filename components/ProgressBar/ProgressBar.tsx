import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useInterval from '@hooks/useInterval';
import { selectPlaybackData } from '@store/playbackSlice';
import { msToText } from '@utils/time';

const ProgressBar = () => {
  const playbackData = useSelector(selectPlaybackData);

  const { is_playing, item, progress_ms } = playbackData || {};

  const progress = progress_ms || 0;
  const duration = item?.duration_ms || 0;

  return (
    <div className="flex w-full gap-4">
      <ProgresBarInput
        track={{
          progress: progress,
          duration: duration,
        }}
        playing={is_playing ?? false}
        onChange={() => 1}
        disabled={false}
      />
      <span>{msToText(duration)}</span>
    </div>
  );
};

type PropsType = {
  track: { progress: number; duration: number };
  playing: boolean;
  onChange: () => void;
  disabled: boolean;
};
function ProgresBarInput({ track, playing, onChange, disabled }: PropsType) {
  const [progress, setProgress] = useState(track.progress);

  useInterval(
    useCallback(
      () =>
        setProgress((prev) => {
          return prev + 1000 >= track.duration ? 0 : prev + 1000;
        }),
      [track.duration]
    ),
    playing ? 1000 : null
  );
  useEffect(() => {
    setProgress(track.progress);
  }, [track]);

  return (
    <>
      <span className="block">{msToText(progress)}</span>

      <label className="group relative w-full">
        <progress
          className="progress progress-primary bg-base-content"
          value={progress}
          max={track.duration}
        />
        <input
          className={
            'range range-primary range-xs absolute inset-0 m-auto opacity-0 transition-opacity group-hover:opacity-100'
          }
          type="range"
          min={0}
          max={track.duration}
          value={progress}
          onChange={(e) => setProgress(e.currentTarget.valueAsNumber)}
          disabled={disabled}
        />
      </label>
    </>
  );
}
export default ProgressBar;
