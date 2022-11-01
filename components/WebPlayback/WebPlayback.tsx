import CurrentSong from '@components/CurrentSong/CurrentSong';
import Player from '@components/Player/Player';
import ProgressBar from '@components/ProgressBar/ProgressBar';
import VolumeControl from '@components/VolumeControl/VolumeControl';
import useSpotify from 'hooks/useSpotify';
import useSpotifySDK from 'hooks/useSpotifySDK';
import { useEffect, useState } from 'react';

interface WebPlaybackProps {
  initialPlaybackState: SpotifyApi.CurrentPlaybackResponse;
}
const WebPlayback = ({ initialPlaybackState }: WebPlaybackProps) => {
  const player = useSpotifySDK();
  const spotifyApi = useSpotify();

  const { item, progress_ms, is_playing } = initialPlaybackState;

  const [currentTrack, setCurrentTrack] = useState(item);
  const [trackProgress, setTrackProgress] = useState(progress_ms);
  const [trackDuration, setTrackDuration] = useState(item?.duration_ms || 0);

  useEffect(() => {
    if (!player) return;
    player.addListener('ready', ({ device_id }) => {
      spotifyApi.transferMyPlayback([device_id], { play: is_playing });
    });
    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });
    player.addListener('player_state_changed', (state) => {
      if (!state) return;

      setCurrentTrack(
        state.track_window
          .current_track as unknown as SpotifyApi.TrackObjectFull
      );
      setTrackProgress(state.position);
      setTrackDuration(state.duration);
    });
  }, [player]);

  return (
    <div className="grid grid-cols-3 items-center justify-items-center">
      <CurrentSong songInfo={currentTrack as unknown as Spotify.Track} />
      <div>
        <Player />
        {item ? (
          <ProgressBar current={trackProgress || 0} duration={trackDuration} />
        ) : (
          <div />
        )}
      </div>
      {currentTrack ? <VolumeControl /> : <div />}
    </div>
  );
};
export default WebPlayback;
