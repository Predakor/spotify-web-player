import { BackIcon } from '@icons/PlaybackIcons';
import { PlaybackButtonProps } from '.';
import Button from '..';

function PreviousButton({ onClick, disabled }: PlaybackButtonProps) {
  return (
    <Button
      className="text-3xl"
      onClick={onClick}
      disabled={disabled}
      aria-label={'Previous song'}
    >
      <BackIcon />
    </Button>
  );
}

export default PreviousButton;
