import { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useSpotifyControls from '@hooks/useSpotifyControls';
import { selectPlaybackData } from '@store/playbackSlice';
import spotifyApi from '@utils/spotify';
import { msToText } from '@utils/time';

const ProgressBar = () => {
  const playbackData = useSelector(selectPlaybackData);
  const { getCurrentPlayback } = useSpotifyControls();

  const { is_playing, item, progress_ms } = playbackData || {};
  const duration = item?.duration_ms || 0;

  const [trackProgress, setTrackProgress] = useState(progress_ms || 0);
  const [selectedProgress, setSelectedProgress] = useState<number>();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedProgress(e.currentTarget.valueAsNumber);
  };

  useEffect(() => {
    if (!selectedProgress) return;
    const debounce = setTimeout(() => {
      spotifyApi.seek(selectedProgress);
      setTrackProgress(selectedProgress);
    }, 200);
    return () => clearTimeout(debounce);
  }, [selectedProgress]);

  useEffect(() => {
    if (!is_playing) return;
    const intervalId = setInterval(
      (lastIntervalTime: number) => {
        if (!is_playing) {
          clearInterval(intervalId);
          setTrackProgress((oldProgress) => {
            return oldProgress + (Date.now() - lastIntervalTime);
          });
        }

        if (trackProgress >= duration) {
          clearInterval(intervalId);
          setTrackProgress(0);
          getCurrentPlayback();
          return;
        }

        setTrackProgress((oldProgress) => oldProgress + 1000);
      },
      1000,
      Date.now()
    );
    return () => clearInterval(intervalId);
  }, [duration, getCurrentPlayback, is_playing, trackProgress]);

  const visible = !playbackData ? 'invisible' : '';
  return (
    <div className="flex gap-4 w-5/6 ">
      <span className={visible}>{msToText(trackProgress)}</span>
      <input
        className={`flex-1 ${visible}`}
        type="range"
        min={0}
        max={duration}
        value={trackProgress}
        onChange={changeHandler}
      />
      <span className={visible}>{msToText(duration)}</span>
    </div>
  );
};
export default ProgressBar;
