import { useSelector } from 'react-redux';
import { selectTrack } from '@store/playbackSlice';
import Track from './Track';

function CurrentTrack() {
  const trackInfo = useSelector(selectTrack);

  if (!trackInfo) return null;
  if (trackInfo.type === 'episode') return <div className="h-14" />;
  return <Track track={trackInfo} />;
}
export default CurrentTrack;
