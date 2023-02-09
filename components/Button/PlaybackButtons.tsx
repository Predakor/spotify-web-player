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
  const { onClick, isPlaying, className = '', disabled } = props;
  return (
    <Button
      {...props}
      className={`${className} text-3xl text-secondary-900 rounded-full`}
      onClick={onClick}
      disabled={disabled}
      ariaLabel={'Play/Pause'}
      ariaPressed={isPlaying}
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
