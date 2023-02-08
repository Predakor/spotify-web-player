import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Playback from '@components/Playback';
import useDeviceControls from '@hooks/useDeviceControls';
import useSpotifySDK from '@hooks/useSpotifySDK';
import { selectActiveDevice, selectThisDevice } from '@store/devicesSlice';
import spotifyApi from '@utils/spotify';
import useSpotifyControls from 'hooks/useSpotifyControls';

function Footer() {
  const player = useSpotifySDK({
    getToken: async () => spotifyApi.getAccessToken() || '',
    volume: 0.5,
  });
  const { getCurrentPlayback } = useSpotifyControls();
  const { getDevices } = useDeviceControls();

  useEffect(() => {
    player?.connect();
  }, [player]);

  console.count('first');
  useEffect(() => {
    const fetchData = async () => {
      try {
        getCurrentPlayback();
        getDevices();
      } catch (error) {}
    };
    fetchData();
  }, [getCurrentPlayback, getDevices]);
  return (
    <footer className="sticky bottom-0 w-full  bg-gray-900 border-t border-secondary-800">
      <Playback />
      <ActiveDevice />
    </footer>
  );
}

function ActiveDevice() {
  const activeDevice = useSelector(selectActiveDevice);
  const thisDevice = useSelector(selectThisDevice);

  if (!activeDevice) return null;
  if (thisDevice?.id === activeDevice.id) return null;

  return (
    <h3 className="bg-primary-700 py-1 pr-4 text-right">
      Listening on {activeDevice.name}
    </h3>
  );
}
export default memo(Footer);
