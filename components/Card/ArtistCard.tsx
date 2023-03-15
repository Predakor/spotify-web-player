import PlaylistPlaybackButton from '@components/Button/PlaylistPlaybackButton';
import CoverImage from '@components/CoverImage/CoverImage';
import { GoCardProps } from './GoToCard';
import GoCard from './GoToCard/GoCard';

type Playlist = SpotifyApi.ArtistObjectFull;

export default function PlaylistCard({ data, onClick }: GoCardProps<Playlist>) {
  const { name, uri, images } = data;
  const [image] = images;

  return (
    <GoCard title={name} content={'artist'} onClick={onClick}>
      <div className="relative">
        <CoverImage
          url={image?.url}
          className="aspect-square h-auto rounded-full"
        />
        <PlaylistPlaybackButton
          uri={uri}
          className={
            'absolute right-0 bottom-0 transform-gpu opacity-0 transition-all group-hover:scale-150 group-hover:opacity-100'
          }
          ariaLabel={`Play/pause ${name} artist`}
        />
      </div>
    </GoCard>
  );
}
