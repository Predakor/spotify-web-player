import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeID } from 'store/deviceSlice';
import useSpotify from './useSpotify';

const useSpotifySDK = () => {
  const token = useSpotify().getAccessToken();

  const dispatch = useDispatch();

  const [player, setPlayer] = useState<Spotify.Player>();

  useEffect(() => {
    if (!token || player) return;

    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;
    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Discofy',
        getOAuthToken: (cb) => {
          cb(token);
        },
        volume: parseInt(localStorage.getItem('volume') || '50') / 100,
      });

      player.on('ready', ({ device_id }) => {
        dispatch(changeID(device_id));
      });

      window.addEventListener('beforeunload', () => {
        document.removeChild(script);
        player.disconnect();
      });

      player.connect();
      setPlayer(player);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [token]);
  return player;
};
export default useSpotifySDK;
