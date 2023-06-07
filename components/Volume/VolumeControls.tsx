import { useEffect, useState } from 'react';
import { MuteVolumeButton } from '@components/Buttons';
import Range from '@components/Range/Range';

interface Props {
  deviceVolume: number;
  changeVolume: (vol: number) => void;
  disabled: boolean;
}

function VolumeControls({ deviceVolume, changeVolume, disabled }: Props) {
  const [volume, setVolume] = useState(deviceVolume);
  const [muted, setMuted] = useState(deviceVolume <= 0);

  useEffect(() => {
    setVolume(deviceVolume);
  }, [deviceVolume]);

  useEffect(() => {
    if (disabled) return;
    if (volume <= 0) setMuted(true);

    const timeoutID = setTimeout(() => changeVolume(muted ? 0 : volume), 200);
    return () => clearTimeout(timeoutID);
  }, [changeVolume, disabled, muted, volume]);

  const vol = muted ? 0 : volume;
  return (
    <>
      <MuteVolumeButton
        onClick={() => setMuted((muted) => !muted)}
        volume={vol}
        disabled={disabled}
      />

      <Range
        onChange={(v) => setVolume(v)}
        value={vol}
        max={100}
        disabled={disabled}
      />
    </>
  );
}
export default VolumeControls;
