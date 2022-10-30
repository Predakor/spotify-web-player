import useSpotify from 'hooks/useSpotify';
import { useEffect, useState } from 'react';
import { MdVolumeMute, MdVolumeDown, MdVolumeUp } from 'react-icons/md';

interface VolumeControlProps {
  initialVolume: number;
}

const VolumeControl = ({ initialVolume }: VolumeControlProps) => {
  const spotifyApi = useSpotify();
  const [volume, setVolume] = useState(initialVolume);
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
    <div className="flex gap-4 justify-self-end">
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

const VolumeIcon = ({ volume }: { volume: number }) => {
  if (volume > 60) return <MdVolumeUp />;
  if (volume > 0) return <MdVolumeDown />;
  return <MdVolumeMute />;
};
export default VolumeControl;
