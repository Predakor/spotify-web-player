import Artists from '@components/Artists/Artists';
import { CardPlaybackButton } from '@components/Buttons/PlaybackButtons/PlaybackButton';
import GoCard from '@components/Card/GoToCard/GoCard';
import CoverImage from '@components/CoverImage/CoverImage';
import { CardProps } from './ContentCard';

type Album = SpotifyApi.AlbumObjectSimplified;

function AlbumCard({ data, onClick }: CardProps<Album>) {
  const { name, uri, images, artists, release_date } = data;
  const [image] = images;

  const releaseDate = release_date.slice(0, 4);

  return (
    <GoCard
      title={name}
      content={
        <p className="flex gap-2">
          <span>{releaseDate}</span>
          ●
          <Artists artists={artists} />
        </p>
      }
      onClick={onClick}
    >
      <div className="relative">
        <CoverImage url={image.url} className="aspect-square h-auto w-full" />
        <CardPlaybackButton label={`album: ${name}`} uri={uri} />
      </div>
    </GoCard>
  );
}
export default AlbumCard;
