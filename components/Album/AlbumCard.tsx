import Artists from '@components/Artists/Artists';
import PlaylistPlaybackButton from '@components/Button/PlaylistPlaybackButton';
import GoCard from '@components/Card/GoCard';
import CoverImage from '@components/CoverImage/CoverImage';
import { useRouter } from 'next/router';

type Album = SpotifyApi.AlbumObjectSimplified;
export default function PlaylistCard({ data }: { data: Album }) {
  const { id, name, uri, images, artists, release_date } = data;
  const [image] = images;
  const { push } = useRouter();

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
      onClick={() => push(`album/${id}`)}
    >
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
