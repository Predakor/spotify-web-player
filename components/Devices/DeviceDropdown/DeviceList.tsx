import { memo } from 'react';
import DeviceIcons from '@icons/DeviceIcons';

interface DeviceListProps {
  devices: SpotifyApi.UserDevice[];
  thisDeviceID: string;
  onClick: (id: string) => void;
}

function DeviceList({ devices, thisDeviceID, onClick }: DeviceListProps) {
  return (
    <>
      {devices.map((device) => {
        const { id, name, type } = device;
        const thisDeviceIsActiveDevice = thisDeviceID === id;
        return (
          <button
            className={`flex items-center gap-4 p-4 hover:bg-background-600 transition-colors`}
            type="button"
            onClick={() => onClick(id)}
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
