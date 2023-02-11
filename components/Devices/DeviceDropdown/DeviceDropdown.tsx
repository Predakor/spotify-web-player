import { useState } from 'react';
import { useSelector } from 'react-redux';
import useDeviceControls from '@hooks/useDeviceControls';
import { selectDevices } from '@store/devicesSlice';
import DeviceList from './DeviceList';
import TopDevice from './TopDevice';

export interface DeviceMenuProps {
  activeDevice?: SpotifyApi.UserDevice;
  thisDevice: SpotifyApi.UserDevice | null;
}

function DeviceMenu({ activeDevice, thisDevice }: DeviceMenuProps) {
  const { transferPlayback } = useDeviceControls();
  const { connectedDevices } = useSelector(selectDevices);
  const [transferPending, setTransferPending] = useState<boolean>();

  const transferHandler = async (id: string) => {
    if (transferPending) return;
    try {
      setTransferPending(true);
      await transferPlayback(id);
    } catch (error) {
      console.error('error in DeviceMenu'); //add error handling;
    } finally {
      setTransferPending(false);
    }
  };

  if (!connectedDevices?.length)
    return <div className="animate-ping">loading</div>;

  const excludeDevice = activeDevice ?? thisDevice;
  const otherDevices = connectedDevices.filter(
    (device) => device.id !== excludeDevice?.id
  );

  return (
    <div className="absolute bottom-10 right-0 flex flex-col gap-4 whitespace-nowrap rounded bg-background-200 p-4 text-3xl shadow-md">
      <TopDevice activeDevice={activeDevice} thisDevice={thisDevice} />
      <h2 className="p-2 font-semibold">Select other devices</h2>
      {thisDevice?.id && (
        <DeviceList
          devices={otherDevices}
          thisDeviceID={thisDevice.id}
          onClick={transferHandler}
        />
      )}
    </div>
  );
}

export default DeviceMenu;
