import Link from 'next/link';

interface Props {
  album: SpotifyApi.AlbumObjectSimplified;
  className?: string;
}

function Album({ album, className }: Props) {
  return (
    <Link
      href={`/album/${album.id}`}
      className={className}
      aria-label="Album on which track appears"
    >
      {album.name}
    </Link>
  );
}
export default Album;
