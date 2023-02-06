import VolumeIcon from '@icons/VolumeIcon';
import Button, { ButtonProps } from '.';

export interface MuteButtonProps extends ButtonProps {
  volume: number;
}
function MuteVolumeButton({ onClick, volume }: MuteButtonProps) {
  return (
    <Button
      onClick={onClick}
      aria-label="Mute/Unmute"
      ariaPressed={volume <= 0}
    >
      <VolumeIcon volume={volume} />
    </Button>
  );
}
export default MuteVolumeButton;
