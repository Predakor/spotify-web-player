import WebPlayback from '@components/WebPlayback/WebPlayback';
import spotifyApi from '@utils/spotify';
import useSpotifyControls from 'hooks/useSpotifyControls';
import useSpotifySDK from 'hooks/useSpotifySDK';
import { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeActive } from 'store/deviceSlice';

type initialData = SpotifyApi.CurrentPlaybackResponse | null;

function Footer() {
  const player = useSpotifySDK();
  const dispatch = useDispatch();

  const { getCurrentPlayback, transferPlayback } = useSpotifyControls();

  const [playbackState, setPlaybackState] = useState<initialData>(null);
  const [activeDevice, setActiveDevice] = useState<SpotifyApi.UserDevice>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!player) return;

    const fetchData = async () => {
      const currentPlayback = await getCurrentPlayback();
      //transfer to current device if no playback
      if (!currentPlayback) {
        transferPlayback({});
        dispatch(changeActive(true));
        setActiveDevice(undefined);
        setPlaybackState(null);
        console.log('no playback');
      } else {
        const { devices } = (await spotifyApi.getMyDevices()).body;
        const [activeDevice] = devices.filter((device) => device.is_active); // get active device from array
        setActiveDevice(activeDevice);
        setPlaybackState(currentPlayback);
        console.log('playback');
      }
      return;
    };
    fetchData().then(() => setIsLoading(false));
  }, [player]);

  if (isLoading || !player) return null; //data is loading

  return (
    <footer className="sticky bottom-0  bg-gray-900 border-t border-secondary-800">
      {<WebPlayback player={player} initialPlaybackState={playbackState} />}
      {activeDevice && (
        <h2 className="bg-primary-700 py-1 pr-4 text-right">
          Listening on {activeDevice.name}
        </h2>
      )}
    </footer>
  );
}
export default memo(Footer);
