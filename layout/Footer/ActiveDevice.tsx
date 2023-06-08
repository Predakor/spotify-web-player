import { useSelector } from 'react-redux';
import { selectActiveDevice, selectThisDevice } from '@store/devicesSlice';

function ActiveDevice() {
  const activeDevice = useSelector(selectActiveDevice);
  const thisDevice = useSelector(selectThisDevice);

  if (!activeDevice) return null;
  if (thisDevice?.id === activeDevice.id) return null;

  return (
    <h3 className="bg-primary-700 py-1 pr-4 text-right">
      Listening on {activeDevice.name}
    </h3>
  );
}
export default ActiveDevice;
