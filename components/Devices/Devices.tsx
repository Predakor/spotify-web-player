import { useState } from 'react';
import { useSelector } from 'react-redux';
import DeviceButton from '@components/Button/DeviceButton';
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

  return (
    <div className="relative h-fit">
      <DeviceButton
        onClick={() => setMenuExpanded((prevState) => !prevState)}
        className={!isActiveDevice ? 'text-primary-500' : ''}
        menuExpanded={menuExpanded}
        deviceType={type}
      />

      <Dropdown expanded={menuExpanded}>
        <DeviceMenu />
      </Dropdown>
    </div>
  );
}

export default Devices;
