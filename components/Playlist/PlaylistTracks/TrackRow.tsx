import LikeButton from '@components/Button/LikedButton';
import Card from '@components/Card';
import Track from '@components/Track/Track';
import { msToText } from '@utils/time';
import { LikedTrack } from 'types/spotifyTypes';

interface TrackRowProps {
  track: LikedTrack;
  index: number;
}
function TrackRow({ track, index }: TrackRowProps) {
  const { duration_ms, album } = track;

  return (
    <Card
      className={`group grid grid-cols-[minmax(0,1fr),auto,auto] items-center gap-4 bg-transparent p-2 
      md:grid-cols-[3ch,repeat(2,minmax(0,1fr)),repeat(3,5ch)] `}
    >
      <p className="hidden text-xl font-bold md:block md:justify-self-end">
        {index + 1}
      </p>
      <Track track={track} />
      <LikeButton
        className="md:order-3"
        songId={track.id}
        isLiked={track.liked}
      />
      <p className="hidden md:order-2  md:block">{album.name}</p>
      <p className="hidden md:order-4 md:block">{msToText(duration_ms)}</p>
      <p className="order-last md:group-hover:visible lg:invisible">|</p>
    </Card>
  );
}

export default TrackRow;
