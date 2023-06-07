import { SkipIcon } from '@icons/PlaybackIcons';
import { PlaybackButtonProps } from '.';
import Button from '..';

function SkipButton({ onClick, disabled }: PlaybackButtonProps) {
  return (
    <Button
      className="text-3xl"
      onClick={onClick}
      disabled={disabled}
      aria-label={'Next song'}
    >
      <SkipIcon />
    </Button>
  );
}

export default SkipButton;
