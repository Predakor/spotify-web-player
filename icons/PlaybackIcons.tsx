import {
  MdRepeat,
  MdOutlineRepeatOne,
  MdPause,
  MdPlayArrow,
  MdShuffle,
  MdSkipNext,
  MdSkipPrevious,
} from 'react-icons/md';
import { RepeatState } from 'types/spotifyTypes';

const Playback = {
  MdRepeat,
  MdOutlineRepeatOne,
  MdPause,
  MdPlayArrow,
  MdShuffle,
  MdSkipNext,
  MdSkipPrevious,
};
function PlaybackIcon({ isPlaying }: { isPlaying: boolean }) {
  return isPlaying ? <MdPlayArrow /> : <MdPause />;
}
function RepeatIcon({ repeatState }: { repeatState: RepeatState }) {
  if (repeatState === 'off') return <MdRepeat />;
  if (repeatState === 'context')
    return <MdRepeat className="text-primary-600" />;
  return <MdOutlineRepeatOne className="text-primary-600" />;
}
function ShuffleIcon({ shuffleState }: { shuffleState: boolean }) {
  return <MdShuffle className={shuffleState ? 'text-primary-600' : ''} />;
}

export {
  ShuffleIcon,
  MdSkipPrevious as BackIcon,
  PlaybackIcon,
  MdSkipNext as SkipIcon,
  RepeatIcon,
};
export default Playback;
