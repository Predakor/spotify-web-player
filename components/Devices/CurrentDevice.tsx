import { useSelector } from 'react-redux';
import { Device } from '@hooks/spotify/useDevices';
import DeviceIcons from '@icons/DeviceIcons';
import { selectIsPlaying } from '@store/playbackSlice';

interface Props {
  activeDevice: Device | null | undefined;
  thisDevice: Device | null | undefined;
}

function CurrentDevice({ activeDevice, thisDevice }: Props) {
  const isPlaying = useSelector(selectIsPlaying);
  const currentDevice = activeDevice ?? activeDevice;
  if (!currentDevice) return null;

  const icon = isPlaying ? (
    <div>PlaybackICOn</div>
  ) : (
    <DeviceIcons device={currentDevice.type} />
  );

  const deviceName =
    currentDevice.id === thisDevice?.id
      ? `This" ${currentDevice.type}`
      : currentDevice.name;

  return (
    <div className={'flex items-center gap-4 p-4'}>
      {icon}
      <div>
        <h2 className="text-2xl font-bold">Current device</h2>
        <p className="text-primary-600">{deviceName}</p>
      </div>
    </div>
  );
}

export default CurrentDevice;
