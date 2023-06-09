'use client';
import { useSelector } from 'react-redux';
import PlaybackButton, {
  ShuffleButton,
  PreviousButton,
  SkipButton,
  RepeatButton,
} from '@components/Buttons/PlaybackButtons';
import useSpotifyControls from '@hooks/spotify/controls/usePlaybackControls';
import { selectPlaybackData } from '@store/playbackSlice';

function Controls() {
  return '1';
  const { shuffle_state, is_playing, repeat_state } =
    useSelector(selectPlaybackData) || {};

  const {
    tooglePlayBack,
    nextSong,
    prevSong,
    toogleRepeatState,
    toggleShuffle,
  } = useSpotifyControls();

  const disabled = is_playing === undefined;

  return (
    <div className="flex content-center gap-2 p-1">
      <ShuffleButton
        onClick={toggleShuffle}
        shuffleState={shuffle_state}
        disabled={disabled}
      />

      <PreviousButton onClick={prevSong} disabled={disabled} />

      <PlaybackButton onClick={tooglePlayBack} isPlaying={!is_playing} />

      <SkipButton onClick={nextSong} disabled={disabled} />

      <RepeatButton
        onClick={toogleRepeatState}
        repeatState={repeat_state}
        disabled={disabled}
      />
    </div>
  );
}
export default Controls;
