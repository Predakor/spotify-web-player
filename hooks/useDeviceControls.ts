import { useDispatch, useSelector } from 'react-redux';
import { selectDevices, setActiveDevice } from '@store/devicesSlice';
import { selectIsPlaying } from '@store/playbackSlice';
import useSpotify from './useSpotify';

const useDeviceControls = () => {
  const spotifyApi = useSpotify();
  const dispatch = useDispatch();
  const isPlaying = useSelector(selectIsPlaying);
  const { activeDevice, thisDevice, connectedDevices } =
    useSelector(selectDevices);

  const controls = {
    transferPlaybackToThisDevice: async () => {
      if (!thisDevice) return;
      const options = { play: isPlaying };
      try {
        await spotifyApi.transferMyPlayback([thisDevice], options);
        dispatch(setActiveDevice(thisDevice));
      } catch (error) {
        console.error('there was a error in deviceControls');
      }
    },

    transferPlayback: (deviceID: string, play?: boolean) => {
      spotifyApi.transferMyPlayback([deviceID], { play: play ?? false });
    },
  };
  return controls;
};
export default useDeviceControls;
