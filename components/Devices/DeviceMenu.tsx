import { useSelector } from 'react-redux';
import useDeviceControls from '@hooks/spotify/controls/useDeviceControls';
import { Device } from '@hooks/spotify/useDevices';
import { selectDevices } from '@store/devicesSlice';
import Loading from 'Layout/Loading';
import TopDevice from './CurrentDevice';
import DeviceList from './DeviceList';

interface DeviceMenuProps {
  thisDevice: Device | null | undefined;
}

function DeviceMenu({ thisDevice }: DeviceMenuProps) {
  const devices = useSelector(selectDevices).connectedDevices;
  const { transferPlayback } = useDeviceControls();

  if (!devices?.length) return <Loading />;

  const activeDevice = devices.find((device) => device.is_active);
  const excludeDeviced = activeDevice ?? thisDevice;
  const otherDevices = devices.filter(
    (device) => device.id !== excludeDeviced?.id
  );

  return (
    <div className="dropdown-right dropdown-content min-w-[200px] rounded bg-background-200 p-4 ">
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
        {"You don't see your device?"}
      </a>
    </div>
  );
}

export default DeviceMenu;
