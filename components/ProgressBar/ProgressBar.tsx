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
    <div className="col-span-full row-start-2 flex w-full items-center gap-4 lg:col-start-2 lg:col-end-3 ">
      <ProgresBarInput
        track={{
          progress: progress,
          duration: duration,
        }}
        playing={is_playing ?? false}
        onChange={() => 1}
        disabled={false}
      />
      <span className={'hidden lg:block'}>{msToText(duration)}</span>
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
      <span className="hidden lg:block">{msToText(progress)}</span>
      <input
        className={'range range-primary range-xs'}
        type="range"
        min={0}
        max={track.duration}
        value={progress}
        onChange={onChange}
        disabled={disabled}
      />
    </>
  );
}
export default ProgressBar;
