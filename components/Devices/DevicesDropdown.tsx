import { useState } from 'react';
import { useSelector } from 'react-redux';
import DeviceButton from '@components/Button/DeviceButton';
import { useDeviceControls } from '@hooks/spotify/controls';
import { selectActiveDevice, selectThisDevice } from '@store/devicesSlice';
import DeviceMenu from './DeviceMenu';

function DevicesDropdown() {
  const thisDevice = useSelector(selectThisDevice);
  const activeDevice = useSelector(selectActiveDevice);
  const [menuExpanded, setMenuExpanded] = useState(false);
  const { getDevices } = useDeviceControls();

  const { id, type } = activeDevice ?? {};
  const isActiveDevice = id === thisDevice?.id;

  const clickHandler = () => {
    getDevices();
    setMenuExpanded((prevState) => !prevState);
  };

  return (
    <div className="dropdown-top dropdown-end dropdown">
      <DeviceButton
        onClick={clickHandler}
        className={!isActiveDevice ? 'text-primary-500' : ''}
        menuExpanded={menuExpanded}
        deviceType={type}
      />
      <DeviceMenu thisDevice={thisDevice} />
    </div>
  );
}

export default DevicesDropdown;
