import { useState } from 'react';
import { useSelector } from 'react-redux';
import Dropdown from '@components/Dropdown/Dropdown';
import DeviceIcons from '@icons/DeviceIcons';
import { selectThisDevice } from '@store/devicesSlice';
import { selectPlaybackData } from '@store/playbackSlice';
import DeviceMenu from './DeviceMenu';

function Devices() {
  const playbackData = useSelector(selectPlaybackData);
  const thisDevice = useSelector(selectThisDevice);
  const [menuExpanded, setMenuExpanded] = useState(false);

  if (!playbackData) return null;

  const { id, type } = playbackData.device;
  const isActiveDevice = id === thisDevice?.id;

  const display = !isActiveDevice ? 'text-primary-500' : '';
  return (
    <div className="relative">
      <button
        className={`${display} bg-inherit text-2xl`}
        onClick={() => setMenuExpanded((prevState) => !prevState)}
        type="button"
        aria-label="connected devices"
      >
        <DeviceIcons device={type} />
      </button>

      <Dropdown expanded={menuExpanded}>
        <DeviceMenu />
      </Dropdown>
    </div>
  );
}

export default Devices;
