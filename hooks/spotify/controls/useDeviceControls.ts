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

    transferPlayback: async (deviceID: string) => {
      try {
        await spotifyApi.transferMyPlayback([deviceID]);
        dispatch(setActiveDevice(deviceID));
      } catch {}
    },

    getDevices: async () => {
      try {
        const { devices } = (await spotifyApi.getMyDevices()).body;
        dispatch(setDevices(devices));
        return devices;
      } catch {}
    },
  });
  return controls.current;
};
export default useDeviceControls;
