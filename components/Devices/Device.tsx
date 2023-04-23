import DeviceIcons from '@icons/DeviceIcons';

interface Props {
  device: SpotifyApi.UserDevice;
  thisDeviceID?: string;
  onClick: (id: string) => void;
}
function Device({ device, thisDeviceID, onClick }: Props) {
  const { id, name, type } = device;
  return (
    <button
      className={`hover:bg-background-600 flex items-center gap-4 p-4 transition-colors`}
      type="button"
      onClick={() => onClick(id ?? '')}
      aria-label={`play music on ${type} ${name}`}
    >
      <DeviceIcons device={type} />
      <p>{thisDeviceID === id ? 'This device' : name}</p>
    </button>
  );
}
export default Device;
