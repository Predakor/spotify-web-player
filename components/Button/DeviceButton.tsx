import DeviceIcons from '@icons/DeviceIcons';
import Button from '.';
import { ButtonProps } from './Button';

export interface Props extends ButtonProps {
  deviceType: string | undefined;
  menuExpanded: boolean;
}

function DeviceButton({ onClick, className, deviceType, menuExpanded }: Props) {
  return (
    <Button
      onClick={onClick}
      className={`button ${className}`}
      aria-label="Connected devices"
      aria-expanded={menuExpanded}
      role="button"
    >
      <DeviceIcons device={deviceType} />
    </Button>
  );
}
export default DeviceButton;
