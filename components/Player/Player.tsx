import PlaybackButton from '@components/Button/PlaybackButton';
import useSpotifyControls from 'hooks/useSpotifyControls';
import { useState } from 'react';
import {
  MdOutlineRepeatOne,
  MdPause,
  MdPlayArrow,
  MdRepeat,
  MdShuffle,
  MdSkipNext,
  MdSkipPrevious,
} from 'react-icons/md';

export interface PlayerProps {
  shuffleState: boolean | undefined;
  isPlaying: boolean | undefined;
  repeatState: 'track' | 'off' | 'context' | undefined;
}

const Player = ({ shuffleState, isPlaying, repeatState }: PlayerProps) => {
  const [playing, setPlaying] = useState(isPlaying);
  const [shuffle, setShuffle] = useState(shuffleState);
  const [repeat, setRepeat] = useState(repeatState);

  const {
    nextSong,
    prevSong,
    toggleShuffle,
    tooglePlayBack,
    toogleRepeatState,
  } = useSpotifyControls();

  const playbackHandler = () => {
    tooglePlayBack()
      .then((playback) => setPlaying(playback))
      .catch((err) => console.error(err));
  };
  const shuffleHandler = () => {
    toggleShuffle()
      .then((shuffleState) => setShuffle(shuffleState))
      .catch((err) => console.error(err));
  };
  const repeatHandler = () => {
    toogleRepeatState()
      .then((repeatState) => setRepeat(repeatState))
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex gap-4">
      <PlaybackButton
        className={`${shuffle ? 'text-primary-500' : ''} text-2xl`}
        onClick={shuffleHandler}
        disabled={shuffle === undefined}
        hideDisabled={true}
      >
        <MdShuffle />
      </PlaybackButton>

      <PlaybackButton
        className={'text-4xl'}
        onClick={prevSong}
        disabled={playing === undefined}
      >
        <MdSkipPrevious />
      </PlaybackButton>

      <PlaybackButton
        className="text-4xl bg-primary-100 text-black rounded-full"
        onClick={playbackHandler}
        disabled={playing === undefined}
      >
        {playing ? <MdPause /> : <MdPlayArrow />}
      </PlaybackButton>

      <PlaybackButton
        className={'text-4xl'}
        onClick={nextSong}
        disabled={playing === undefined}
      >
        <MdSkipNext />
      </PlaybackButton>

      <PlaybackButton
        className={`${repeat === 'off' ? '' : 'text-primary-500'} text-2xl`}
        onClick={repeatHandler}
        disabled={repeat === undefined}
        hideDisabled={true}
      >
        {repeat === 'off' && <MdRepeat />}
        {repeat === 'context' && <MdRepeat />}
        {repeat === 'track' && <MdOutlineRepeatOne />}
      </PlaybackButton>
    </div>
  );
};

export default Player;
