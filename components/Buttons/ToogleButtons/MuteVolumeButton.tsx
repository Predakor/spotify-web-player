import VolumeIcon from '@icons/VolumeIcon';
import Button from '..';

interface MuteButtonProps {
  onClick: VoidFunction;
  volume: number;
  disabled: boolean;
}

function MuteVolumeButton({ onClick, volume, disabled }: MuteButtonProps) {
  return (
    <Button
      className={disabled ? 'text-text-disabled' : ''}
      onClick={onClick}
      disabled={disabled}
      aria-label="Mute/Unmute"
      aria-pressed={volume <= 0}
    >
      <VolumeIcon volume={volume} />
    </Button>
  );
}
export default MuteVolumeButton;
