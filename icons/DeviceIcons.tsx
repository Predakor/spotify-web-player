import {
  MdDevicesOther,
  MdDesktopWindows,
  MdSmartphone,
  MdOutlineSpeaker,
} from 'react-icons/md';

type DeviceType = 'computer' | 'smartphone' | 'speaker';
function DeviceIcons({ device }: { device?: DeviceType | string }) {
  if (!device) return <MdDevicesOther />;
  const devices = {
    speaker: <MdOutlineSpeaker />,
    computer: <MdDesktopWindows />,
    smartphone: <MdSmartphone />,
  };
  const type = device.toLowerCase() as DeviceType;
  return devices[type] ?? <p>?</p>;
}

export default DeviceIcons;
