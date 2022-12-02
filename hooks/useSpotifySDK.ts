import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeID } from 'store/deviceSlice';
import useSpotify from './useSpotify';

const useSpotifySDK = () => {
  const dispatch = useDispatch();
  const spotifyApi = useSpotify();

  const [player, setPlayer] = useState<Spotify.Player>();

  useEffect(() => {
    const token = spotifyApi.getAccessToken();
    if (!token || player) return;

    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;
    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Discofy',
        getOAuthToken: () => {
          spotifyApi.getAccessToken();
        },
        volume: parseInt(localStorage.getItem('volume') || '5000') / 100,
      });
      window.addEventListener('beforeunload', () => player.disconnect());

      player.on('ready', ({ device_id }) => {
        dispatch(changeID(device_id));
      });

      player.connect();
      setPlayer(player);
    };
  }, [spotifyApi]);
  return player;
};
export default useSpotifySDK;
