import WebPlayback from '@components/WebPlayback/WebPlayback';
import spotifyApi from '@utils/spotify';
import useSpotifyControls from 'hooks/useSpotifyControls';
import useSpotifySDK from 'hooks/useSpotifySDK';
import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeActive, changeID, selectDevice } from 'store/deviceSlice';

type initialData = SpotifyApi.CurrentPlaybackResponse | Record<string, never>;

function Footer() {
  const player = useSpotifySDK();
  const dispatch = useDispatch();

  const { getCurrentPlayback, transferPlayback } = useSpotifyControls();

  const { id } = useSelector(selectDevice);
  const [data, setData] = useState<initialData | undefined>();
  const [activeDevice, setActiveDevice] = useState<SpotifyApi.UserDevice>();

  useEffect(() => {
    if (!player) return;

    const fetchData = async () => {
      const data = await getCurrentPlayback();
      if (data) {
        const devices = (await spotifyApi.getMyDevices()).body.devices;
        const activeDevice = devices.filter((device) => device.is_active)[0];
        setActiveDevice(activeDevice);
        setData(data);
      } //no playback === no devices
      else {
        setData({});
        player.on('ready', async ({ device_id }) => {
          await transferPlayback({ deviceID: device_id });
          dispatch(changeActive(true));
          dispatch(changeID(device_id));
          setActiveDevice(undefined);

          setData(await getCurrentPlayback());
        });
      }
    };

    fetchData().catch((error) => console.error(error));
  }, [player]);

  if (data === undefined) return <></>; //data is loading

  return (
    <footer className="fixed bottom-0 w-screen bg-gray-900 p-4">
      {activeDevice && <h2>Listening on {activeDevice.name}</h2>}
      {player && <WebPlayback player={player} initialPlaybackState={data} />}
    </footer>
  );
}
export default memo(Footer);
