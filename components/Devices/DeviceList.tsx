import Device from './Device';

interface DeviceListProps {
  devices: SpotifyApi.UserDevice[];
  thisDeviceID?: string;
  onClick: (id: string) => void;
}

function DeviceList({ devices, thisDeviceID, onClick }: DeviceListProps) {
  if (!devices.length) return <p>No devices found</p>;

  const deviceList = devices.map((device) => (
    <Device
      device={device}
      thisDeviceID={thisDeviceID}
      onClick={onClick}
      key={device.id}
    />
  ));

  return <>{deviceList}</>;
}

export default DeviceList;
