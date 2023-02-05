import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useDeviceControls from '@hooks/useDeviceControls';
import DeviceIcons from '@icons/DeviceIcons';
import { selectActiveDevice, selectDevices } from '@store/devicesSlice';

function DeviceMenu() {
  const { connectedDevices: devices, thisDevice: thisDeviceID } =
    useSelector(selectDevices);
  const { getDevices, transferPlayback } = useDeviceControls();
  const [transferPending, setTransferPending] = useState<boolean>();
  const activeDevice = useSelector(selectActiveDevice);

  useEffect(() => {
    getDevices().catch(() => {
      console.error('error in DeviceMenu'); //add error handling;
    });
  }, []);

  const transfeHandler = async (id: string) => {
    if (transferPending) return;
    try {
      setTransferPending(true);
      await transferPlayback(id);
      setTransferPending(false);
    } catch (error) {
      console.error('error in DeviceMenu'); //add error handling;
    }
  };

  if (!devices?.length) return <div className="animate-ping">loading</div>;
  return (
    <div className="absolute bottom-10 right-0 flex flex-col gap-4 p-4  bg-background-800 rounded shadow-md text-3xl whitespace-nowrap">
      <h2 className="p-2 font-semibold">Select other devices</h2>
      <>
        {devices.map((device) => {
          const { id, name, type } = device;
          const classes = 'flex items-center gap-4 p-4';
          const isActiveDevice = id === activeDevice?.id;
          if (isActiveDevice)
            return (
              <div className={classes} style={{ order: -1 }} key={id}>
                <DeviceIcons device={type} />
                <div>
                  <h2>Current device</h2>
                  <p className="text-primary-500">
                    {isActiveDevice ? `This ${type.toLowerCase()}` : name}
                  </p>
                </div>
              </div>
            );

          return (
            <button
              className={`${classes} hover:bg-background-600 transition-colors`}
              type="button"
              onClick={() => transfeHandler(id || '')}
              aria-label={`play music on ${type} ${name}`}
              key={id}
            >
              <DeviceIcons device={type} />
              <p>{name}</p>
            </button>
          );
        })}
      </>
    </div>
  );
}

export default DeviceMenu;
