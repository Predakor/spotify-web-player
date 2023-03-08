import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveDevice, setDevices } from '@store/devicesSlice';
import useSpotify from '../useSpotify';

const useDeviceControls = () => {
  const spotifyApi = useSpotify();
  const dispatch = useDispatch();
  const controls = useRef({
    transferPlaybackToThisDevice: async (thisDeviceID: string) => {
      try {
        await controls.current.transferPlayback(thisDeviceID);
        dispatch(setActiveDevice(thisDeviceID));
      } catch (error) {
        console.error('there was a error in deviceControls');
      }
    },

    transferPlayback: async (deviceID: string, play?: boolean) => {
      const options = { play: play ?? false };
      try {
        await spotifyApi.transferMyPlayback([deviceID], options);
        await controls.current.getDevices();
        dispatch(setActiveDevice(deviceID));
      } catch (error) {
        throw error;
      }
    },

    getDevices: async () => {
      try {
        const { devices } = (await spotifyApi.getMyDevices()).body;
        dispatch(setDevices(devices));
        return devices;
      } catch (error) {
        throw error;
      }
    },
  });
  return controls.current;
};
export default useDeviceControls;
