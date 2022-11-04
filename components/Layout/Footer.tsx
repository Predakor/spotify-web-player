import Player from '@components/Player/Player';
import WebPlayback from '@components/WebPlayback/WebPlayback';
import spotifyApi from '@utils/spotify';
import useSpotify from 'hooks/useSpotify';
import useSpotifyControls from 'hooks/useSpotifyControls';
import useSpotifySDK from 'hooks/useSpotifySDK';
import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeActive, changeID, selectDevice } from 'store/deviceSlice';

type initialData = SpotifyApi.CurrentPlaybackResponse;

function Footer() {
  const player = useSpotifySDK();

  const { getCurrentPlayback, transferPlayback } = useSpotifyControls();

  const { id } = useSelector(selectDevice);
  const [data, setData] = useState<initialData | null | undefined>();
  const [activeDevice, setActiveDevice] = useState<SpotifyApi.UserDevice>();

  //edge case user is not playing

  useEffect(() => {
    if (!player) return;

    const fetchData = async () => {
      const data = await getCurrentPlayback();
      setData(data);
      if (data) {
        const devices = (await spotifyApi.getMyDevices()).body.devices;
        const activeDevice = devices.filter((device) => device.is_active)[0];
        setActiveDevice(activeDevice);
      } //no playback === no devices
      else {
        player.on('ready', ({ device_id }) => {
          transferPlayback({ deviceID: device_id });
        });
      }
    };

    fetchData().catch((error) => console.error(error));
  }, [player]);

  if (data === undefined) return <></>; //data is loading

  return (
    <footer className="sticky bottom-0 bg-gray-900 p-4">
      {data === null && <Player /> /* no track is playing*/}
      {activeDevice && activeDevice.id !== id && (
        <h2>Listening on {activeDevice.name}</h2>
      )}
      {data && player && (
        <WebPlayback player={player} initialPlaybackState={data} />
      )}
    </footer>
  );
}
export default memo(Footer);
