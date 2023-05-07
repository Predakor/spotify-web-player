import { PlaybackIcon } from '@icons/PlaybackIcons';
import Button, { ButtonProps } from '../Button';
import PlaylistPlaybackButton from './PlaylistPlaybackButton';

function PlaybackButton(props: ButtonProps & { isPlaying?: boolean }) {
  const { isPlaying, className, ...restProps } = props;
  return (
    <Button
      {...restProps}
      className={`btn-circle bg-primary ${className ?? ''}`}
      aria-label={`Play/Pause ${props['aria-label']}`}
      aria-pressed={isPlaying}
      stopPrepagation
    >
      <PlaybackIcon isPlaying={isPlaying ?? false} />
    </Button>
  );
}

function CardPlaybackButton({ uri, label }: { uri: string; label: string }) {
  return (
    <PlaylistPlaybackButton
      uri={uri}
      ariaLabel={label}
      className="absolute right-0 text-neutral opacity-0 duration-300 hover:scale-125 group-hover:-translate-y-full group-hover:bg-primary group-hover:opacity-100"
    />
  );
}

export { CardPlaybackButton };

export default PlaybackButton;
