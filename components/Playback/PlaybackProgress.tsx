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
    const timeoutID = setTimeout(() => spotifyApi.seek(progress), 200);
    return () => clearTimeout(timeoutID);
  }, [progress, spotifyApi]);

  return (
    <div className="flex w-full flex-row items-center gap-2 px-2">
      <p>{msToText(intervalProgress)}</p>
      <input
        type="range"
        className="range range-primary range-xs flex-1"
        onChange={(e) => setProgress(e.currentTarget.valueAsNumber)}
        min={0}
        max={end}
        value={intervalProgress}
        disabled={disabled}
      />
      <p>{msToText(end)}</p>
    </div>
  );
}
export default PlaybackProgress;
