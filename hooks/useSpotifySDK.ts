import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setThisDevice } from '@store/devicesSlice';
import { setPlaybackData } from '@store/playbackSlice';
import useSpotify from './useSpotify';
import useSpotifyControls from './useSpotifyControls';

const useSpotifySDK = () => {
  const dispatch = useDispatch();
  const { getCurrentPlayback } = useSpotifyControls();
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

      player.on('ready', async ({ device_id }) => {
        console.log('Device active', device_id);
        dispatch(setThisDevice(device_id));
      });

      player.on('not_ready', ({ device_id }) => {
        console.log('Device has gone offline', device_id);
      });

      player.on('initialization_error', ({ message }) => {
        console.error(message);
      });

      player.on('authentication_error', ({ message }) => {
        console.error(message);
      });

      player.on('account_error', ({ message }) => {
        console.error(message);
      });

      player.on('player_state_changed', async () => {
        getCurrentPlayback();
      });

      player.connect();
      setPlayer(player);
    };
  }, [dispatch, getCurrentPlayback, player, spotifyApi]);
  return player;
};
export default useSpotifySDK;
