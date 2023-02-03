import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Playback from '@components/Playback';
import {
  selectActiveDevice,
  setActiveDevice,
  setDevices,
} from '@store/devicesSlice';
import { setPlaybackData } from '@store/playbackSlice';
import spotifyApi from '@utils/spotify';
import useSpotifyControls from 'hooks/useSpotifyControls';
import useSpotifySDK from 'hooks/useSpotifySDK';

function Footer() {
  const player = useSpotifySDK();
  const dispatch = useDispatch();

  const { getCurrentPlayback } = useSpotifyControls();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!player) return;

    const fetchData = async () => {
      const currentPlayback = await getCurrentPlayback();
      if (currentPlayback) {
        dispatch(setActiveDevice(currentPlayback.device.id || ''));
      }
      const { devices } = (await spotifyApi.getMyDevices()).body;
      dispatch(setDevices(devices));
    };
    fetchData().then(() => setIsLoading(false));
  }, [player]);

  if (isLoading || !player) return null; //data is loading

  return (
    <footer className="sticky bottom-0 w-full  bg-gray-900 border-t border-secondary-800">
      <Playback />
      {/* <WebPlayback player={player} initialPlaybackState={playbackState} /> */}
      <ActiveDevice />
    </footer>
  );
}

function ActiveDevice() {
  const activeDevice = useSelector(selectActiveDevice);
  if (!activeDevice) return null;
  return (
    <h3 className="bg-primary-700 py-1 pr-4 text-right">
      Listening on {activeDevice.name}
    </h3>
  );
}
export default memo(Footer);
