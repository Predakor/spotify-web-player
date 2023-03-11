import Artists from '@components/Artists/Artists';
import PlaylistPlaybackButton from '@components/Button/PlaylistPlaybackButton';
import CoverImage from '@components/CoverImage/CoverImage';
import Link from 'next/link';

type Album = SpotifyApi.AlbumObjectSimplified;
export default function PlaylistCard({ data }: { data: Album }) {
  const { id, name, uri, images, artists, release_date } = data;
  const [image] = images;

  return (
    <Link href={`/album/${id}`}>
      <a className="card  bg-base-100 ">
        <div className="group card-body ">
          <div className="relative aspect-square h-full lg:w-full">
            <CoverImage url={image?.url ?? ''} />
            <PlaylistPlaybackButton
              uri={uri}
              className={
                'absolute right-0 transform-gpu opacity-0 transition-all group-hover:-translate-y-full group-hover:scale-150 group-hover:opacity-100'
              }
              ariaLabel={`Play/pause ${name} artist`}
            />
          </div>
          <h2 className="card-title truncate">{name}</h2>

          <p className="flex gap-2">
            <span>{release_date.slice(0, 4)}</span>
            ●
            <Artists artists={artists} />
          </p>
        </div>
      </a>
    </Link>
  );
}
