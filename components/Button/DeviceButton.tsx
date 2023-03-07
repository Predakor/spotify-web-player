import { MouseEvent } from 'react';
import DeviceIcons from '@icons/DeviceIcons';

export interface DeviceButtonProps {
  onClick: () => void;
  className?: string;
  deviceType: string | undefined;
  menuExpanded: boolean;
}

function DeviceButton(props: DeviceButtonProps) {
  const { onClick, className, deviceType, menuExpanded } = props;

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    if (menuExpanded && document.activeElement === e.currentTarget) {
      e.currentTarget.blur();
    }
    onClick();
  };

  return (
    <button
      onClick={(e) => clickHandler(e)}
      className={`button ${className}`}
      aria-label="Connected devices"
      aria-expanded={menuExpanded}
      role="button"
    >
      <DeviceIcons device={deviceType} />
    </button>
  );
}
export default DeviceButton;
