import { useSelector } from 'react-redux';
import { selectActiveDevice, selectThisDevice } from '@store/devicesSlice';
import { setLocalVolume } from '@utils/setLocalValue';
import useSpotify from '../useSpotify';

function VolumeControls() {
  const spotifyApi = useSpotify();
  const activeDevice = useSelector(selectActiveDevice);
  const thisDevice = useSelector(selectThisDevice);

  const thisDeviceActive = activeDevice === thisDevice;

  const changeVolume = (volume: number) => {
    spotifyApi.setVolume(volume);
    if (!thisDeviceActive) setLocalVolume(volume);
  };

  return changeVolume;
}

export default VolumeControls;
