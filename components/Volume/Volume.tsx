import { useVolumeControls } from '@hooks/spotify/controls';
import useDeviceVolume from '@hooks/useDeviceVolume';
import VolumeControls from './VolumeControls';

function Volume({ device }: { device: SpotifyApi.UserDevice }) {
  const volume = useDeviceVolume(device);
  const changeVolume = useVolumeControls();

  return (
    <div className="flex flex-row items-center">
      <VolumeControls
        deviceVolume={volume}
        changeVolume={(v) => changeVolume(v)}
        disabled={device.type === 'Smartphone'}
      />
    </div>
  );
}
0
export default Volume;
