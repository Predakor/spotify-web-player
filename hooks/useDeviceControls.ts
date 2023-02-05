import { useDispatch, useSelector } from 'react-redux';
import {
  selectDevices,
  setActiveDevice,
  setDevices,
} from '@store/devicesSlice';
import { selectIsPlaying } from '@store/playbackSlice';
import useSpotify from './useSpotify';

const useDeviceControls = () => {
  const spotifyApi = useSpotify();
  const dispatch = useDispatch();
  const isPlaying = useSelector(selectIsPlaying);
  const { thisDevice } = useSelector(selectDevices);

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

    transferPlayback: async (deviceID: string, play?: boolean) => {
      const options = { play: play ?? isPlaying };
      try {
        await spotifyApi.transferMyPlayback([deviceID], options);
        await controls.getDevices();
        dispatch(setActiveDevice(deviceID));
      } catch (error) {
        return error;
      }
    },

    getDevices: async () => {
      try {
        const devices = (await spotifyApi.getMyDevices()).body.devices;
        dispatch(setDevices(devices));
        return devices;
      } catch (error) {
        return error;
      }
    },
  };
  return controls;
};
export default useDeviceControls;
