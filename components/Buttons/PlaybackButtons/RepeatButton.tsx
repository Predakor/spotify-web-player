import { RepeatIcon } from '@icons/PlaybackIcons';
import { RepeatState } from 'types/spotifyTypes';
import { PlaybackButtonProps } from '.';
import Button from '..';

type Props = PlaybackButtonProps & {
  repeatState?: RepeatState;
};

function RepeatButton({ onClick, repeatState, disabled }: Props) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      aria-label={'Playback repeat state'}
      aria-pressed={repeatState !== 'off'}
    >
      <RepeatIcon repeatState={repeatState ?? 'off'} />
    </Button>
  );
}

export default RepeatButton;
