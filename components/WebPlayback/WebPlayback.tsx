import CurrentSong from '@components/CurrentSong/CurrentSong';
import Player from '@components/Player/Player';
import VolumeControl from '@components/VolumeControl/VolumeControl';
import useSpotify from 'hooks/useSpotify';
import useSpotifySDK from 'hooks/useSpotifySDK';
import { useEffect, useState } from 'react';

const WebPlayback = () => {
  const [currentTrack, setCurrentTrack] = useState<Spotify.Track | undefined>();
  const [is_paused, setPaused] = useState(false);
  const [is_active, setActive] = useState(false);
  const spotifyApi = useSpotify();
  const player = useSpotifySDK();

  useEffect(() => {
    if (!player) return;
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
      spotifyApi.transferMyPlayback([device_id], { play: false });
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
  }, [player, spotifyApi]);

  return (
    <div className="grid grid-cols-3 items-center justify-items-center w-full ">
      {player && spotifyApi && (
        <>
          <CurrentSong songInfo={currentTrack} />
          <Player />
          <VolumeControl />
        </>
      )}
    </div>
  );
};
export default WebPlayback;
