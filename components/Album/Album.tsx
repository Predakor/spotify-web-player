import Link from 'next/link';

function Album({
  album,
  className,
}: {
  album: SpotifyApi.AlbumObjectSimplified;
  className?: string;
}) {
  return (
    <Link href={`/album/${album.id}`}>
      <p className={className} aria-label="Album on which this track appears">
        {album.name}
      </p>
    </Link>
  );
}
export default Album;
