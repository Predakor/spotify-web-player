import DeviceIcons from '@icons/DeviceIcons';
import Button, { ButtonProps } from '.';

export interface DeviceButtonProps extends ButtonProps {
  deviceType: string | undefined;
  menuExpanded: boolean;
}

function DeviceButton(props: DeviceButtonProps) {
  const { onClick, className, deviceType, menuExpanded } = props;
  return (
    <Button
      onClick={onClick}
      className={className}
      aria-label="Connected devices"
      ariaExpanded={menuExpanded}
    >
      <DeviceIcons device={deviceType} />
    </Button>
  );
}
export default DeviceButton;
