import { useSelector } from 'react-redux';
import DeviceIcons from '@icons/DeviceIcons';
import { selectIsPlaying } from '@store/playbackSlice';
import { DeviceMenuProps } from './DeviceDropdown';

function TopDevice({ activeDevice, thisDevice }: DeviceMenuProps) {
  const isPlaying = useSelector(selectIsPlaying);
  if (!thisDevice) return;

  const currentDeviceType = activeDevice?.type ?? thisDevice.type.toLowerCase();
  const thisDeviceIsActive = thisDevice.id === activeDevice?.id;
  return (
    <div className={'flex items-center gap-4 p-4'}>
      {isPlaying ? (
        <div>PlaybackICOn</div>
      ) : (
        <DeviceIcons device={currentDeviceType} />
      )}
      <div>
        <h2>Current device</h2>
        <p className="text-primary-500">
          {!activeDevice || thisDeviceIsActive
            ? `This ${thisDevice.type}`
            : activeDevice.name}
        </p>
      </div>
    </div>
  );
}

export default TopDevice;
