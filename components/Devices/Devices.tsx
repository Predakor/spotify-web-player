import { lazy, Suspense, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DeviceButton from '@components/Button/DeviceButton';
import Dropdown from '@components/Dropdown/Dropdown';
import useDeviceControls from '@hooks/useDeviceControls';
import { selectActiveDevice, selectThisDevice } from '@store/devicesSlice';

const DeviceMenu = lazy(() => import('./DeviceDropdown/DeviceDropdown'));

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
    <div className="relative">
      <DeviceButton
        onClick={() => setMenuExpanded((prevState) => !prevState)}
        className={!isActiveDevice ? 'text-primary-500' : ''}
        menuExpanded={menuExpanded}
        deviceType={type}
      />

      <Dropdown expanded={menuExpanded}>
        <Suspense fallback={'loading'}>
          {thisDevice && (
            <DeviceMenu activeDevice={activeDevice} thisDevice={thisDevice} />
          )}
        </Suspense>
      </Dropdown>
    </div>
  );
}

export default Devices;
