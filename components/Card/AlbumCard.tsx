import Artists from '@components/Artists/Artists';
import PlaylistPlaybackButton from '@components/Button/PlaylistPlaybackButton';
import GoCard from '@components/Card/GoToCard/GoCard';
import CoverImage from '@components/CoverImage/CoverImage';
import { CardProps } from './ContentCard';

type Album = SpotifyApi.AlbumObjectSimplified;

function AlbumCard({ data, onClick }: CardProps<Album>) {
  const { name, uri, images, artists, release_date } = data;
  const [image] = images;

  return (
    <GoCard
      title={name}
      content={
        <p className="flex gap-2">
          <span>{release_date.slice(0, 4)}</span>
          ●
          <Artists artists={artists} />
        </p>
      }
      onClick={onClick}
    >
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
export default AlbumCard;
