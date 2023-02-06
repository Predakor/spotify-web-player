import { MdVolumeUp, MdVolumeDown, MdVolumeMute } from 'react-icons/md';

function VolumeIcon({ volume }: { volume: number }) {
  if (volume > 60) return <MdVolumeUp />;
  if (volume > 0) return <MdVolumeDown />;
  return <MdVolumeMute />;
}
export default VolumeIcon;
