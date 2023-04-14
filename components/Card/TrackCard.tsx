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
          className="absolute right-0 hidden opacity-0 transition-all 
          group-hover:-translate-y-full group-hover:scale-150 group-hover:opacity-100 lg:block "
        />
      </div>
    </GoCard>
  );
}
export default TrackCard;
