import { useSelector } from 'react-redux';
import useDeviceControls from '@hooks/spotify/controls/useDeviceControls';
import { Device } from '@hooks/spotify/useDevices';
import { selectDevices } from '@store/devicesSlice';
import NoDeviceMessage from './ConnectDeviceMessage';
import TopDevice from './CurrentDevice';
import DeviceList from './DeviceList';

interface DeviceMenuProps {
  thisDevice: Device | null | undefined;
}

function DeviceMenu({ thisDevice }: DeviceMenuProps) {
  const devices = useSelector(selectDevices).connectedDevices;
  const { transferPlayback } = useDeviceControls();

  if (!devices || devices.length === 0) {
    return <NoDeviceMessage />;
  }

  const activeDevice = devices.find((device) => device.is_active);
  const otherDevices = devices.filter(
    (device) => device.id !== (activeDevice?.id || thisDevice?.id)
  );

  return (
    <>
      <TopDevice activeDevice={activeDevice} thisDevice={thisDevice} />
      <h2 className="font-semibold md:text-xl">Select other devices</h2>
      <DeviceList
        devices={otherDevices}
        thisDeviceID={thisDevice?.id ?? ''}
        onClick={transferPlayback}
      />
      <a
        className="text-xl"
        href="https://support.spotify.com/us/article/spotify-connect/"
        lang="EN"
      >
        {"Don't see your device?"}
      </a>
    </>
  );
}

export default DeviceMenu;
