import PlaylistPlaybackButton from '@components/Button/PlaylistPlaybackButton';
import CoverImage from '@components/CoverImage/CoverImage';
import { CardProps } from './ContentCard';
import GoCard from './GoToCard/GoCard';

type Playlist = SpotifyApi.PlaylistObjectSimplified;

function PlaylistCard({ data, onClick }: CardProps<Playlist>) {
  const { name, description, uri, images } = data;
  const [image] = images;

  return (
    <GoCard title={name} content={description ?? ''} onClick={onClick}>
      <div className="relative">
        <CoverImage url={image.url} className="aspect-square h-auto w-full" />
        <PlaylistPlaybackButton
          uri={uri}
          ariaLabel={name}
          className="absolute right-0 opacity-0 duration-300 hover:scale-125 group-hover:-translate-y-full group-hover:bg-primary-700 group-hover:opacity-100"
        />
      </div>
    </GoCard>
  );
}

export default PlaylistCard;
