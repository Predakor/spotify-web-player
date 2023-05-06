import PlaylistPlaybackButton from '@components/Button/PlaylistPlaybackButton';
import CoverImage from '@components/CoverImage/CoverImage';
import { CardProps } from './ContentCard';
import GoCard from './GoToCard/GoCard';

type Artist = SpotifyApi.ArtistObjectFull;

function ArtistCard({ data, onClick }: CardProps<Artist>) {
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
            'absolute right-0 opacity-0 duration-300 hover:scale-125 group-hover:-translate-y-full group-hover:bg-primary-700 group-hover:opacity-100'
          }
          ariaLabel={`Play/pause ${name} artist`}
        />
      </div>
    </GoCard>
  );
}

export default ArtistCard;
