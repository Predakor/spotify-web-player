import Artists from '@components/Artists/Artists';
import LikeButton from '@components/Button/LikedButton';
import Card from '@components/Card';
import { msToText } from '@utils/time';
import Image from 'next/image';

interface TrackRowProps {
  track: SpotifyApi.TrackObjectFull;
  index: number;
}
function TrackRow({ track, index }: TrackRowProps) {
  const { id, duration_ms, album } = track;
  const { artists } = album;

  return (
    <Card className={`flex items-center justify-between`}>
      <p className="justify-self-end text-xl font-bold">{index + 1}</p>
      <Image
        src={album.images[0].url}
        alt="current song thumbnail"
        width={50}
        height={50}
      />
      <p>{album.name}</p>
      <p className="justify-self-end">{msToText(duration_ms)}</p>
      <LikeButton songId={id} />
      <Artists artists={artists} />
    </Card>
  );
}

export default TrackRow;
