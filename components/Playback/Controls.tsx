import { useSelector } from 'react-redux';
import {
  BackButton,
  PlayButton,
  RepeatButton,
  ShuffleButton,
  SkipButton,
} from '@components/Button/PlaybackButtons';
import useSpotifyControls from '@hooks/useSpotifyControls';
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
    <div className="flex content-center gap-4">
      <ShuffleButton
        onClick={shuffleHandler}
        shuffleState={shuffle_state}
        disabled={disabled}
      />
      <BackButton onClick={backHandler} disabled={disabled} />
      <PlayButton onClick={playHandler} isPlaying={!is_playing} />
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
