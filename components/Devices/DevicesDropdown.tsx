import { useState } from 'react';
import { useSelector } from 'react-redux';
import DeviceButton from '@components/Buttons/DeviceButton';
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

  const color = !isActiveDevice ? 'text-primary-500' : 'text-base-content';
  return (
    <div className="dropdown-top dropdown-end dropdown static ">
      <DeviceButton
        onClick={clickHandler}
        className={`${color} p-0 md:px-4`}
        menuExpanded={menuExpanded}
        deviceType={type}
      />
      <div className="dropdown-content w-full lg:w-80">
        <article className="mx-2 rounded-md bg-base-100 p-4 shadow-lg shadow-base-300 md:m-4 ">
          <DeviceMenu thisDevice={thisDevice} />
        </article>
      </div>
    </div>
  );
}

export default DevicesDropdown;
