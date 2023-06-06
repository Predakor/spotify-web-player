import { useEffect, useState } from 'react';
import useSpotify from '@hooks/spotify/useSpotify';
import useProgressInterval from '@hooks/useProgressInterval';
import { msToText } from '@utils/time';

interface Props {
  start?: number | null;
  end: number;
  disabled: boolean;
  paused: boolean;
}

function PlaybackProgress({ start, end, disabled, paused }: Props) {
  const spotifyApi = useSpotify();
  const [progress, setProgress] = useState(start ?? 0);
  const intervalProgress = useProgressInterval(progress, end, paused);

  useEffect(() => {
    const seekHandler = () => {
      if (!disabled) {
        spotifyApi.seek(progress);
      }
    };

    const timeoutID = setTimeout(seekHandler, 200);
    return () => clearTimeout(timeoutID);
  }, [disabled, progress, spotifyApi]);

  return (
    <div className="flex w-full items-center gap-2 px-2">
      <p>{msToText(intervalProgress)}</p>
      {disabled ? (
        <progress
          className="progress-bar progress progress-primary"
          value={intervalProgress}
          max={end || 1}
        />
      ) : (
        <input
          type="range"
          className={`range range-primary range-xs flex-1`}
          min={0}
          max={end}
          value={intervalProgress}
          defaultValue={start || 0}
          onChange={(e) => setProgress(e.currentTarget.valueAsNumber)}
          disabled={disabled}
        />
      )}
      <p>{msToText(end)}</p>
    </div>
  );
}

export default PlaybackProgress;
