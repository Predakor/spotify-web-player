import Artists from '@components/Artists/Artists';
import { PlaylistPlaybackButton } from '@components/Button';
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
          url={album.images[0].url}
          className="aspect-square h-auto w-full"
        />
        <PlaylistPlaybackButton
          uri={uri}
          ariaLabel={name}
          className="absolute right-0 opacity-0 duration-300 hover:scale-125 group-hover:-translate-y-full group-hover:bg-primary-700 group-hover:opacity-100"
        />
      </div>
    </GoCard>
  );
}
export default TrackCard;
