import { useSelector } from 'react-redux';
import LikeButton from '@components/Button/LikedButton';
import { selectTrack } from '@store/playbackSlice';
import Track from './Track';

function CurrentTrack() {
  const trackInfo = useSelector(selectTrack);

  if (!trackInfo) return null;
  if (trackInfo.type === 'episode') return <div className="h-14" />;
  return (
    <div className="flex justify-items-stretch">
      <Track track={trackInfo} />
      <LikeButton songId={trackInfo.id} />
    </div>
  );
}
export default CurrentTrack;
