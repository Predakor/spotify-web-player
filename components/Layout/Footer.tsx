import { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Playback from '@components/Playback';
import { setPlaybackData } from '@store/playbackSlice';
import spotifyApi from '@utils/spotify';
import useSpotifyControls from 'hooks/useSpotifyControls';
import useSpotifySDK from 'hooks/useSpotifySDK';
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
      } else {
        const { devices } = (await spotifyApi.getMyDevices()).body;
        const [activeDevice] = devices.filter((device) => device.is_active); // get active device from array
        setActiveDevice(activeDevice);
        setPlaybackState(currentPlayback);
      }
      dispatch(setPlaybackData(currentPlayback));
    };
    fetchData().then(() => setIsLoading(false));
  }, [player]);

  if (isLoading || !player) return null; //data is loading

  return (
    <footer className="sticky bottom-0 w-full  bg-gray-900 border-t border-secondary-800">
      <Playback />
      {/* <WebPlayback player={player} initialPlaybackState={playbackState} /> */}
      {activeDevice && (
        <h2 className="bg-primary-700 py-1 pr-4 text-right">
          Listening on {activeDevice.name}
        </h2>
      )}
    </footer>
  );
}
export default memo(Footer);
