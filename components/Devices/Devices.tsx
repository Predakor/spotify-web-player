import { useSelector } from 'react-redux';
import { selectDevices } from '@store/devicesSlice';

function Devices() {
  const devices = useSelector(selectDevices);

  return <div onClick={() => console.log(devices)}>Device Icon</div>;
}
export default Devices;
