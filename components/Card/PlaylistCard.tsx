import PlaylistPlaybackButton from '@components/Button/PlaylistPlaybackButton';
import CoverImage from '@components/CoverImage/CoverImage';
import { GoCardProps } from './GoToCard';
import GoCard from './GoToCard/GoCard';

type Playlist = SpotifyApi.PlaylistObjectSimplified;

function PlaylistCard({ data, onClick }: GoCardProps<Playlist>) {
  const { name, description, uri, images } = data;
  const [image] = images;

  return (
    <GoCard title={name} content={description ?? ''} onClick={onClick}>
      <div className="relative">
        <CoverImage url={image.url} className="aspect-square h-auto w-full" />
        <PlaylistPlaybackButton
          uri={uri}
          ariaLabel={name}
          className="absolute right-0 hidden opacity-0 
          transition-all group-hover:-translate-y-full group-hover:scale-150 group-hover:opacity-100 lg:block "
        />
      </div>
    </GoCard>
  );
}

export default PlaylistCard;
