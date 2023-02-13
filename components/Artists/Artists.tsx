import Link from 'next/link';

interface ArtistProps {
  artists: SpotifyApi.ArtistObjectSimplified[];
  className?: string;
}

function Artists({ artists, className = '' }: ArtistProps) {
  const displayedArtistLimit = artists.length > 3 ? 3 : artists.length;
  const displayedArtists = artists.slice(0, displayedArtistLimit);
  return (
    <span className="flex gap-2 truncate text-text">
      {displayedArtists.map((artist) => (
        <Link href={`/artist/${artist.id}`} prefetch={false} key={artist.uri}>
          <a
            className={`${className} transition-opacity hover:text-opacity-80 hover:underline`}
          >
            {artist.name}
          </a>
        </Link>
      ))}
      {artists.length > 3 && 'and more...'}
    </span>
  );
}

export default Artists;
