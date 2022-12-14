import CurrentSong from '@components/CurrentSong/CurrentSong';
import Player from '@components/Player/Player';
import ProgressBar from '@components/ProgressBar/ProgressBar';
import VolumeControl from '@components/VolumeControl/VolumeControl';
import spotifyApi from '@utils/spotify';

import { useEffect, useState } from 'react';

interface WebPlaybackProps {
  player: Spotify.Player;
  initialPlaybackState:
    | SpotifyApi.CurrentPlaybackResponse
    | Record<string, never>;
}
const WebPlayback = ({ player, initialPlaybackState }: WebPlaybackProps) => {
  const { item, progress_ms, is_playing } = initialPlaybackState || {};

  const [currentTrack, setCurrentTrack] = useState(item);
  const [trackProgress, setTrackProgress] = useState(progress_ms || 0);
  const [trackDuration, setTrackDuration] = useState(item?.duration_ms || 0);

  useEffect(() => {
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
      {currentTrack && (
        <CurrentSong songInfo={currentTrack as unknown as Spotify.Track} />
      )}
      <div>
        <Player />
        {currentTrack && (
          <ProgressBar current={trackProgress || 0} duration={trackDuration} />
        )}
      </div>
      {currentTrack && <VolumeControl />}
    </div>
  );
};
export default WebPlayback;
