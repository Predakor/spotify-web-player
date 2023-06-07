import PlaybackButton from './PlaybackButton';
import PreviousButton from './PreviousButton';
import RepeatButton from './RepeatButton';
import ShuffleButton from './ShuffleButton';
import SkipButton from './SkipButton';

export interface PlaybackButtonProps {
  onClick: VoidFunction;
  disabled: boolean;
}

export { PreviousButton, SkipButton, ShuffleButton, RepeatButton };
export default PlaybackButton;
