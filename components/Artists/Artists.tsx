interface ArtistProps {
  artists: SpotifyApi.ArtistObjectSimplified[] | Spotify.Entity[];
}

function Artists({ artists }: ArtistProps) {
  return (
    <div className="flex">
      {artists.map((artist) => (
        <p
          className="text-secondary-400 transition-opacity hover:text-opacity-80 hover:underline"
          key={artist.uri}
        >
          {artist.name}
        </p>
      ))}
    </div>
  );
}

export default Artists;
