import CurrentSong from '@components/CurrentSong/CurrentSong';
import Player from '@components/Player/Player';
import VolumeControl from '@components/VolumeControl/VolumeControl';
import { useEffect, useState } from 'react';

const WebPlayback = ({ token }: { token: string }) => {
  const [player, setPlayer] = useState<Spotify.Player | undefined>();
  const [currentTrack, setCurrentTrack] = useState<Spotify.Track | undefined>();
  const [is_paused, setPaused] = useState(false);
  const [is_active, setActive] = useState(false);

  useEffect(() => {
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
        volume: 1,
      });

      setPlayer(player);

      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
      });
      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });
      player.addListener('player_state_changed', (state) => {
        if (!state) return;

        setCurrentTrack(state.track_window.current_track);
        setPaused(state.paused);

        player.getCurrentState().then((state) => {
          !state ? setActive(false) : setActive(true);
        });
      });

      player.connect();
    };
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-between w-full ">
      <CurrentSong songInfo={currentTrack} />
      <Player />
      <VolumeControl />
    </div>
  );
};
export default WebPlayback;
