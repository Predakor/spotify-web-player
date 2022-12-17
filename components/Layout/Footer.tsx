import WebPlayback from '@components/WebPlayback/WebPlayback';
import spotifyApi from '@utils/spotify';
import useSpotifyControls from 'hooks/useSpotifyControls';
import useSpotifySDK from 'hooks/useSpotifySDK';
import { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeActive } from 'store/deviceSlice';

type initialData = SpotifyApi.CurrentPlaybackResponse | Record<string, never>;

function Footer() {
  const player = useSpotifySDK();
  const dispatch = useDispatch();

  const { getCurrentPlayback, transferPlayback } = useSpotifyControls();

  const [playbackState, setPlaybackState] = useState<initialData | undefined>();
  const [activeDevice, setActiveDevice] = useState<SpotifyApi.UserDevice>();

  useEffect(() => {
    if (!player) return;

    const fetchData = async () => {
      const currentPlayback = await getCurrentPlayback();

      //transfer to current device if no playback
      if (!currentPlayback) {
        await transferPlayback({});
        dispatch(changeActive(true));
        setActiveDevice(undefined);
        setPlaybackState({});
        return;
      }

      const devices = (await spotifyApi.getMyDevices()).body.devices;
      const [activeDevice] = devices.filter((device) => device.is_active);
      setActiveDevice(activeDevice);
      setPlaybackState(currentPlayback);
    };

    fetchData().catch((error) => console.error(error));
  }, [player]);

  if (playbackState === undefined) return null; //data is loading

  return (
    <footer className="sticky bottom-0  bg-gray-900 border-t border-secondary-800 before: ">
      <div className="p-4">
        {player && (
          <WebPlayback player={player} initialPlaybackState={playbackState} />
        )}
      </div>
      {activeDevice && (
        <h2 className="bg-primary-700 py-1 pr-4 text-right">
          Listening on {activeDevice.name}
        </h2>
      )}
    </footer>
  );
}
export default memo(Footer);
