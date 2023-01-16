import CurrentSong from '@components/CurrentSong/CurrentSong';
import Player from '@components/Player/Player';
import ProgressBar from '@components/ProgressBar/ProgressBar';
import VolumeControl from '@components/VolumeControl/VolumeControl';
import useSpotifyControls from '@hooks/useSpotifyControls';

import { useEffect, useState } from 'react';

interface WebPlaybackProps {
  player: Spotify.Player;
  initialPlaybackState: SpotifyApi.CurrentPlaybackResponse | null;
}
const WebPlayback = ({ player, initialPlaybackState }: WebPlaybackProps) => {
  const { getCurrentPlayback } = useSpotifyControls();

  const { item, progress_ms, repeat_state, is_playing, shuffle_state } =
    initialPlaybackState || {};
  const [currentTrack, setCurrentTrack] = useState(
    (item as unknown as Spotify.Track) || null
  );
  const [trackProgress, setTrackProgress] = useState(progress_ms || 0);
  const [trackDuration, setTrackDuration] = useState(item?.duration_ms || 0);

  const songEndHandler = async () => {
    const { item, progress_ms } = await getCurrentPlayback();

    setCurrentTrack(item as unknown as Spotify.Track);
    setTrackProgress(progress_ms || 0);
    setTrackDuration(item?.duration_ms || 0);
  };

  useEffect(() => {
    player.addListener('player_state_changed', (state) => {
      if (!state) return;
      setCurrentTrack(state.track_window.current_track);
      setTrackProgress(state.position);
      setTrackDuration(state.duration);
    });
  }, [player]);

  if (!currentTrack) {
    return (
      <div className="grid items-center justify-items-center">
        <Player
          shuffleState={shuffle_state}
          isPlaying={is_playing}
          repeatState={repeat_state}
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-[3fr,5fr,3fr] items-center justify-items-center gap-4 p-4">
      <CurrentSong songInfo={currentTrack} />
      <div className="flex flex-col items-center w-full">
        <Player
          shuffleState={shuffle_state}
          isPlaying={is_playing}
          repeatState={repeat_state}
        />
        <ProgressBar
          current={trackProgress}
          duration={trackDuration}
          onSongEnd={songEndHandler}
        />
      </div>
      <VolumeControl />
    </div>
  );
};
export default WebPlayback;
