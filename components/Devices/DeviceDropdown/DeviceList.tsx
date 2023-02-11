import { memo } from 'react';
import DeviceIcons from '@icons/DeviceIcons';

interface DeviceListProps {
  devices: SpotifyApi.UserDevice[];
  thisDeviceID?: string;
  onClick: (id: string) => void;
}

function DeviceList({ devices, thisDeviceID, onClick }: DeviceListProps) {
  if (!devices.length) return <p>No devices</p>;

  return (
    <>
      {devices.map((device) => {
        const { id, name, type } = device;
        const thisDeviceIsActiveDevice = thisDeviceID === id;
        return (
          <button
            className={`hover:bg-background-600 flex items-center gap-4 p-4 transition-colors`}
            type="button"
            onClick={() => onClick(id ?? '')}
            aria-label={`play music on ${type} ${name}`}
            key={id}
          >
            <DeviceIcons device={type} />
            <p>{thisDeviceIsActiveDevice ? 'This device' : name}</p>
          </button>
        );
      })}
    </>
  );
}

export default memo(DeviceList);
