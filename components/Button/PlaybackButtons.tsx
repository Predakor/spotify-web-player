import { ReactNode } from 'react';
import {
  BackIcon,
  PlaybackIcon,
  RepeatIcon,
  ShuffleIcon,
  SkipIcon,
} from '@icons/PlaybackIcons';
import { RepeatState } from 'types/spotifyTypes';

export interface PlaybackButtonProps {
  onClick: VoidFunction;
  disabled?: boolean;
  hideDisabled?: boolean;
  children?: ReactNode;
  className?: string;
  ariaLabel?: string;
}

function PlaybackButton({
  onClick,
  children,
  disabled = false,
  hideDisabled = false,
  className = '',
  ariaLabel = 'Playback control',
}: PlaybackButtonProps) {
  const hide = hideDisabled && disabled ? 'invisible' : '';
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${hide} bg-transparent text-2xl ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

function BackButton({ onClick, disabled }: PlaybackButtonProps) {
  return (
    <PlaybackButton
      className="text-3xl"
      onClick={onClick}
      disabled={disabled}
      ariaLabel={'previous Song'}
    >
      <BackIcon />
    </PlaybackButton>
  );
}
function PlayButton({
  onClick,
  isPlaying,
  disabled,
}: PlaybackButtonProps & { isPlaying?: boolean }) {
  return (
    <PlaybackButton
      className="bg-primary-100 text-4xl text-secondary-900 rounded-full"
      onClick={onClick}
      ariaLabel={'Play/Pause'}
      disabled={disabled}
    >
      <PlaybackIcon isPlaying={isPlaying ?? false} />
    </PlaybackButton>
  );
}
function SkipButton({ onClick, disabled }: PlaybackButtonProps) {
  return (
    <PlaybackButton
      className="text-3xl"
      onClick={onClick}
      disabled={disabled}
      ariaLabel={'Next song'}
    >
      <SkipIcon />
    </PlaybackButton>
  );
}

function RepeatButton({
  onClick,
  repeatState,
  disabled,
}: PlaybackButtonProps & { repeatState?: RepeatState }) {
  return (
    <PlaybackButton
      onClick={onClick}
      disabled={disabled}
      hideDisabled={true}
      ariaLabel={'Playback repeat'}
    >
      <RepeatIcon repeatState={repeatState ?? 'off'} />
    </PlaybackButton>
  );
}

function ShuffleButton({
  onClick,
  shuffleState,
  disabled,
}: PlaybackButtonProps & { shuffleState?: boolean }) {
  return (
    <PlaybackButton
      onClick={onClick}
      disabled={disabled}
      hideDisabled={true}
      className={'text-buttonActive'}
    >
      <ShuffleIcon shuffleState={shuffleState ?? false} />
    </PlaybackButton>
  );
}

export { ShuffleButton, BackButton, PlayButton, SkipButton, RepeatButton };
export default PlaybackButton;
