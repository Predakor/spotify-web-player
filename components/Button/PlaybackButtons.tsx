import {
  BackIcon,
  PlaybackIcon,
  RepeatIcon,
  ShuffleIcon,
  SkipIcon,
} from '@icons/PlaybackIcons';
import { RepeatState } from 'types/spotifyTypes';
import Button, { ButtonProps } from '.';

function BackButton({ onClick, disabled }: ButtonProps) {
  return (
    <Button
      className="text-3xl"
      onClick={onClick}
      disabled={disabled}
      ariaLabel={'Previous song'}
    >
      <BackIcon />
    </Button>
  );
}
function PlaybackButton(props: ButtonProps & { isPlaying?: boolean }) {
  const { isPlaying, className = '', ariaLabel } = props;
  return (
    <Button
      {...props}
      className={`btn-primary btn-circle btn text-3xl text-neutral ${className}`}
      ariaLabel={`Play/Pause ${ariaLabel}`}
      ariaPressed={isPlaying}
      stopPrepagation={true}
    >
      <PlaybackIcon isPlaying={isPlaying ?? false} />
    </Button>
  );
}
function SkipButton({ onClick, disabled }: ButtonProps) {
  return (
    <Button
      className="text-3xl"
      onClick={onClick}
      disabled={disabled}
      ariaLabel={'Next song'}
    >
      <SkipIcon />
    </Button>
  );
}

function RepeatButton({
  onClick,
  repeatState,
  disabled,
}: ButtonProps & { repeatState?: RepeatState }) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      ariaLabel={'Playback repeat state'}
      ariaPressed={repeatState !== 'off'}
    >
      <RepeatIcon repeatState={repeatState ?? 'off'} />
    </Button>
  );
}

function ShuffleButton({
  onClick,
  shuffleState,
  disabled,
}: ButtonProps & { shuffleState?: boolean }) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      ariaLabel={'Switch shuffle state'}
      ariaPressed={shuffleState}
    >
      <ShuffleIcon shuffleState={shuffleState ?? false} />
    </Button>
  );
}

export { ShuffleButton, BackButton, PlaybackButton, SkipButton, RepeatButton };
