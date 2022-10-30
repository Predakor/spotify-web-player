import CurrentSong from '@components/CurrentSong/CurrentSong';
import Player from '@components/Player/Player';
import ProgressBar from '@components/ProgressBar/ProgressBar';
import VolumeControl from '@components/VolumeControl/VolumeControl';
import useSpotify from 'hooks/useSpotify';
import useSpotifySDK from 'hooks/useSpotifySDK';
import { useEffect, useState } from 'react';

const WebPlayback = () => {
  const spotifyApi = useSpotify();
  const player = useSpotifySDK();

  const [currentTrack, setCurrentTrack] = useState<Spotify.Track | undefined>();
  const [is_paused, setPaused] = useState(false);
  const [volume, setVolume] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);

  useEffect(() => {
    if (!player) return;
    player.addListener('ready', ({ device_id }) => {
      spotifyApi.transferMyPlayback([device_id], { play: true });
      setVolume(20);
    });
    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });
    player.addListener('player_state_changed', (state) => {
      if (!state) return;

      setCurrentTrack(state.track_window.current_track);
      setTrackProgress(state.track_window.current_track.duration_ms);
      setPaused(state.paused);
    });
  }, [player, spotifyApi]);

  return (
    <div className="grid grid-cols-3 items-center justify-items-center">
      <CurrentSong songInfo={currentTrack} />
      <div>
        <Player />
        {currentTrack ? (
          <ProgressBar current={0} duration={trackProgress} />
        ) : (
          <div />
        )}
      </div>
      {currentTrack ? <VolumeControl initialVolume={volume} /> : <div />}
    </div>
  );
};
export default WebPlayback;
