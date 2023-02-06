import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import VolumeIcon from '@icons/VolumeIcon';
import { selectActiveDevice } from '@store/devicesSlice';
import useSpotify from 'hooks/useSpotify';

const VolumeControl = () => {
  const spotifyApi = useSpotify();
  const activeDevice = useSelector(selectActiveDevice);

  const [volume, setVolume] = useState(
    activeDevice?.volume_percent ??
      parseInt(localStorage.getItem('volume') || '50')
  );
  const [mutedVolume, setMutedVolume] = useState(volume);

  const changeVolume = useCallback(() => {
    localStorage.setItem('volume', volume.toString());
    if (activeDevice) spotifyApi.setVolume(volume);
  }, [activeDevice, spotifyApi, volume]);

  useEffect(() => {
    const timeoutID = setTimeout(changeVolume, 100);
    return () => clearTimeout(timeoutID);
  }, [changeVolume, spotifyApi, volume]);

  useEffect(() => {
    if (activeDevice?.volume_percent) setVolume(activeDevice.volume_percent);
  }, [activeDevice]);

  const muteHandler = () => {
    if (volume <= 0) return setVolume(mutedVolume);
    setVolume(0);
    setMutedVolume(volume);
  };

  return (
    <div className="flex gap-4 justify-self-end">
      <button
        className="bg-inherit text-2xl"
        onClick={muteHandler}
        type="button"
        aria-label="Mute"
      >
        <VolumeIcon volume={volume} />
      </button>
      <input
        type="range"
        value={volume}
        onChange={(e) => setVolume(e.target.valueAsNumber)}
        min={0}
        max={100}
      />
    </div>
  );
};

export default VolumeControl;
