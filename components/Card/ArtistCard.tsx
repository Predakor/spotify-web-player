import { CardPlaybackButton } from '@components/Buttons/PlaybackButtons/PlaybackButton';
import CoverImage from '@components/CoverImage/CoverImage';
import { CardProps } from './ContentCard';
import GoCard from './GoToCard/GoCard';

type Artist = SpotifyApi.ArtistObjectFull;

function ArtistCard({ data, onClick }: CardProps<Artist>) {
  const { name, uri, images } = data;

  return (
    <GoCard title={name} content={'artist'} onClick={onClick}>
      <div className="relative">
        <CoverImage
          urls={images}
          className="aspect-square h-auto rounded-full"
        />
        <CardPlaybackButton label={`artist: ${name}`} uri={uri} />
      </div>
    </GoCard>
  );
}

export default ArtistCard;
