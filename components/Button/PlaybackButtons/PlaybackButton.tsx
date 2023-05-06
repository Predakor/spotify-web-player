import { PlaybackIcon } from '@icons/PlaybackIcons';
import Button, { ButtonProps } from '../Button';

function PlaybackButton(props: ButtonProps & { isPlaying?: boolean }) {
  const { isPlaying, className, ...restProps } = props;
  return (
    <Button
      {...restProps}
      className={`text-3xl text-neutral ${className ?? ''}`}
      aria-label={`Play/Pause ${props['aria-label']}`}
      aria-pressed={isPlaying}
      stopPrepagation={true}
    >
      <PlaybackIcon isPlaying={isPlaying ?? false} />
    </Button>
  );
}

export default PlaybackButton;
