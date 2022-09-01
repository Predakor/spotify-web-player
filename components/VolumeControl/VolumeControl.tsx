import useSpotify from 'hooks/useSpotify';
import { useCallback, useEffect, useRef, useState } from 'react';
import { MdVolumeMute, MdVolumeDown, MdVolumeUp } from 'react-icons/md';

const VolumeIcon = ({ volume }: { volume: number }) => {
  if (volume > 60) return <MdVolumeUp />;
  if (volume > 0) return <MdVolumeDown />;
  return <MdVolumeMute />;
};

const VolumeControl = () => {
  const spotifyApi = useSpotify();
  const [volume, setVolume] = useState(50);
  const [mutedVolume, setMutedVolume] = useState(volume);

  useEffect(() => {
    const timeoutID = setTimeout(() => spotifyApi.setVolume(volume), 100);
    return () => clearTimeout(timeoutID);
  }, [spotifyApi, volume]);

  const muteHandler = () => {
    if (volume === 0) return setVolume(mutedVolume);

    setVolume(0);
    setMutedVolume(volume);
  };

  return (
    <div className="flex gap-4">
      <div onClick={muteHandler}>
        <VolumeIcon volume={volume} />
      </div>
      <input
        className=""
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
