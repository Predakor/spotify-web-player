import Artists from '@components/Artists/Artists';
import LikeButton from '@components/Button/LikedButton';
import Image from 'next/image';
import Link from 'next/link';

const Song = ({ track }: { track: SpotifyApi.TrackObjectFull }) => {
  const { id, name, album, artists } = track;
  const [artist] = artists;

  return (
    <div className="flex gap-4 justify-self-start">
      <Image
        src={album.images[0].url}
        alt="current song thumbnail"
        width={50}
        height={50}
      />

      <div className="inline-block flex-1 truncate">
        <Link href={'library/tracks/id'} prefetch={false}>
          <a className="text-xl text-text-important" href={artist.href}>
            {name}
          </a>
        </Link>

        <Artists artists={artists} />
      </div>

      <LikeButton songId={id} />
    </div>
  );
};

export default Song;
