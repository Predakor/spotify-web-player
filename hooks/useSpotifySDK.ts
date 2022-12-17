import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeActive, changeID } from 'store/deviceSlice';
import useSpotify from './useSpotify';

const useSpotifySDK = () => {
  const dispatch = useDispatch();
  const spotifyApi = useSpotify();

  const [player, setPlayer] = useState<Spotify.Player | undefined>(undefined);

  useEffect(() => {
    const token = spotifyApi.getAccessToken();
    if (!token || player) return;

    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;
    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new Spotify.Player({
        name: 'Discofy',
        getOAuthToken: (cb) => {
          cb(spotifyApi.getAccessToken() || '');
        },
        volume: parseInt(localStorage.getItem('volume') || '5000') / 100,
      });
      window.addEventListener('beforeunload', () => player.disconnect());

      setPlayer(player);

      player.addListener('ready', async ({ device_id }) => {
        console.log('Device active', device_id);
        dispatch(changeID(device_id));
      });

      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device has gone offline', device_id);
      });

      player.addListener('initialization_error', ({ message }) => {
        console.error(message);
      });

      player.addListener('authentication_error', ({ message }) => {
        console.error(message);
      });

      player.addListener('account_error', ({ message }) => {
        console.error(message);
      });

      player.connect();
    };
  }, [spotifyApi]);
  return player;
};
export default useSpotifySDK;
