import Artists from '@components/Artists/Artists';
import { CardPlaybackButton } from '@components/Buttons/PlaybackButtons/PlaybackButton';
import CoverImage from '@components/CoverImage/CoverImage';
import { CardProps } from './ContentCard';
import GoCard from './GoToCard/GoCard';

type Track = SpotifyApi.TrackObjectFull;

function TrackCard({ data, onClick }: CardProps<Track>) {
  const { name, uri, album, artists } = data;

  return (
    <GoCard
      title={name}
      content={<Artists artists={artists} />}
      onClick={onClick}
    >
      <div className="relative">
        <CoverImage
          urls={album.images}
          className="aspect-square h-auto w-full"
        />
        <CardPlaybackButton label={name} uri={uri} />
      </div>
    </GoCard>
  );
}
export default TrackCard;
