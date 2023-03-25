import { useSelector } from 'react-redux';
import PlaybackButton, {
  ShuffleButton,
  PreviousButton,
  SkipButton,
  RepeatButton,
} from '@components/Button/PlaybackButtons';
import useSpotifyControls from '@hooks/spotify/controls/usePlaybackControls';
import { selectPlaybackData } from '@store/playbackSlice';

function Controls() {
  const { shuffle_state, is_playing, repeat_state } =
    useSelector(selectPlaybackData) || {};
  const playbackControls = useSpotifyControls();

  const playHandler = () => {
    playbackControls.tooglePlayBack();
  };
  const skipHandler = () => {
    playbackControls.nextSong();
  };
  const backHandler = () => {
    playbackControls.prevSong();
  };
  const shuffleHandler = () => {
    playbackControls.toggleShuffle();
  };
  const repeatHandler = () => {
    playbackControls.toogleRepeatState();
  };

  const disabled = is_playing === undefined;

  return (
    <div className="hidden content-center gap-4 lg:flex">
      <ShuffleButton
        onClick={shuffleHandler}
        shuffleState={shuffle_state}
        disabled={disabled}
      />

      <PreviousButton onClick={backHandler} disabled={disabled} />

      <PlaybackButton
        onClick={playHandler}
        isPlaying={!is_playing}
        className={'bg-primary-50'}
      />

      <SkipButton onClick={skipHandler} disabled={disabled} />

      <RepeatButton
        onClick={repeatHandler}
        repeatState={repeat_state}
        disabled={disabled}
      />
    </div>
  );
}
export default Controls;
