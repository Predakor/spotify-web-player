import { CardPlaybackButton } from '@components/Buttons/PlaybackButtons/PlaybackButton';
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
        <CardPlaybackButton label={name} uri={uri} />
      </div>
    </GoCard>
  );
}

export default PlaylistCard;
