import { useEffect, useState } from 'react';
import useSpotify from './useSpotify';

const useSpotifySDK = () => {
  const [player, setPlayer] = useState<Spotify.Player>();
  const token = useSpotify().getAccessToken();

  useEffect(() => {
    if (!token) return;

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

      setPlayer(player);
      player.connect();
    };
    return () => {
      document.body.removeChild(script);
    };
  }, [token]);
  return player;
};
export default useSpotifySDK;
