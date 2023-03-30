import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setThisDevice } from '@store/devicesSlice';

interface options {
  volume: number;
  getToken: () => Promise<string>;
}

function createSDK({ volume, getToken }: options) {
  return new Spotify.Player({
    name: 'Discofy',
    getOAuthToken: async (cb) => {
      cb(await getToken());
    },
    volume: volume,
  });
}

const useSpotifySDK = ({ volume, getToken }: options) => {
  const playerRef = useRef<Spotify.Player>();
  const [isReady, setIsReady] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!window.Spotify) {
      const script = document.createElement('script');
      script.src = 'https://sdk.scdn.co/spotify-player.js';
      script.async = true;
      document.head.appendChild(script);
    }

    window.onSpotifyWebPlaybackSDKReady = () => {
      playerRef.current = createSDK({ getToken: getToken, volume: volume });
      setIsReady(true);
    };

    if (window.Spotify) {
      playerRef.current = createSDK({ getToken: getToken, volume: volume });
      setIsReady(true);
    }

    window.addEventListener('beforeunload', () =>
      playerRef.current?.disconnect()
    );
    return () => {
      playerRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!playerRef.current || !isReady) return;
    playerRef.current.on('ready', ({ device_id }) => {
      dispatch(setThisDevice(device_id));
    });
    playerRef.current.connect();
  }, [dispatch, isReady]);

  return playerRef.current;
};
export default useSpotifySDK;
