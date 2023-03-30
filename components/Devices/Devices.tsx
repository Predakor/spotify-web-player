import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DeviceButton from '@components/Button/DeviceButton';
import useDeviceControls from '@hooks/spotify/controls/useDeviceControls';
import { selectActiveDevice, selectThisDevice } from '@store/devicesSlice';
import DeviceMenu from './DeviceDropdown/DeviceDropdown';

function Devices() {
  const thisDevice = useSelector(selectThisDevice);
  const activeDevice = useSelector(selectActiveDevice);

  const { getDevices } = useDeviceControls();
  const [menuExpanded, setMenuExpanded] = useState(false);

  useEffect(() => {
    if (menuExpanded) getDevices();
  }, [getDevices, menuExpanded]);

  const { id, type } = activeDevice ?? {};
  const isActiveDevice = id === thisDevice?.id;

  return (
    <div className="dropdown-end dropdown-top dropdown">
      <DeviceButton
        onClick={() => setMenuExpanded((prevState) => !prevState)}
        className={!isActiveDevice ? 'text-primary-500' : ''}
        menuExpanded={menuExpanded}
        deviceType={type}
      />

      {thisDevice?.id && (
        <DeviceMenu activeDevice={activeDevice} thisDevice={thisDevice} />
      )}
    </div>
  );
}

export default Devices;
