import { ShuffleIcon } from '@icons/PlaybackIcons';
import { PlaybackButtonProps } from '.';
import Button from '..';

type Props = PlaybackButtonProps & {
  shuffleState?: boolean;
};

function ShuffleButton({ onClick, shuffleState, disabled }: Props) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      aria-label={'Switch shuffle state'}
      aria-pressed={shuffleState}
    >
      <ShuffleIcon shuffleState={shuffleState ?? false} />
    </Button>
  );
}

export default ShuffleButton;
